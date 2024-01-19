import { NativeInteractionEvent } from '@app/utils/types/events/NativeInteractionEvent';
import { fakeNativeInteractionEvent } from '@app/utils/types/events/NativeInteractionEvent/__test__';
import { Func } from '@app/utils/types/misc/Func';
import { onTest } from '@test/utils/onTest';
import { interactionModalityListeners } from './interactionModalityListeners';

describe('interactionModalityListeners()', () => {
	let error: Error | null = null;
	let expectedModality: string | null = null;
	let nativeInteractionEvent: NativeInteractionEvent | null = null;
	let mockChangeHandler: jest.Mock | null = null;
	let activate: unknown = null;
	let addListener: unknown = null;
	let hasListener: unknown = null;
	let removeListener: unknown = null;
	let resetListeners: unknown = null;
	let result: unknown = null;
	let index = 0;

	beforeAll(() => {
		mockChangeHandler = jest.fn();
	});

	beforeEach(() => {
		try {
			index++;

			({ activate, addListener, hasListener, removeListener, resetListeners } =
				interactionModalityListeners());

			onTest(index, {
				3: () => {
					(addListener as Func)(mockChangeHandler);

					result = (hasListener as Func)(mockChangeHandler);
				},
				4: () => {
					result = (hasListener as Func)(mockChangeHandler);
				},
				5: () => {
					(removeListener as Func)(mockChangeHandler);

					result = (hasListener as Func)(mockChangeHandler);
				},
				6: () => {
					(addListener as Func)(mockChangeHandler);
					(removeListener as Func)(mockChangeHandler);

					result = (hasListener as Func)(mockChangeHandler);
				},
				7: () => {
					(addListener as Func)(mockChangeHandler);
					(resetListeners as Func)();

					result = (hasListener as Func)(mockChangeHandler);
				},
				8: () => {
					(addListener as Func)(mockChangeHandler);

					expectedModality = 'virtual';
					nativeInteractionEvent = fakeNativeInteractionEvent();

					(activate as Func)(expectedModality, nativeInteractionEvent);
				},
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.restoreAllMocks();

		activate = null;
		addListener = null;
		expectedModality = null;
		hasListener = null;
		nativeInteractionEvent = null;
		removeListener = null;
		resetListeners = null;
		result = null;
		error = null;
	});

	afterAll(() => {
		mockChangeHandler = null;
	});

	it('should not throw an error', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();
	});

	it('should return a set of functions for listening to changes in the current interaction modality', () => {
		expect(index).toBe(2);

		expect(activate).toStrictEqual(expect.any(Function));
		expect(addListener).toStrictEqual(expect.any(Function));
		expect(hasListener).toStrictEqual(expect.any(Function));
		expect(removeListener).toStrictEqual(expect.any(Function));
		expect(resetListeners).toStrictEqual(expect.any(Function));
	});

	it('should add a listener when "addListener()" is called', () => {
		expect(index).toBe(3);
		expect(result).toBe(true);
	});

	it('should return `true` when "hasListener()" is called with an added listener', () => {
		expect(index).toBe(4);
		expect(result).toBe(true);
	});

	it('should return `false` when "hasListener()" is called without an added listener', () => {
		expect(index).toBe(5);
		expect(result).toBe(false);
	});

	it('should remove a listener when "removeListener()" is called', () => {
		expect(index).toBe(6);
		expect(result).toBe(false);
	});

	it('should remove all listeners when "resetListeners()" is called', () => {
		expect(index).toBe(7);
		expect(result).toBe(false);
	});

	it('should call all listeners when "activate()" is called', () => {
		expect(index).toBe(8);

		expect(mockChangeHandler).toBeCalledWith(
			expectedModality,
			nativeInteractionEvent,
		);
	});
});
