import { Func } from '@/utils/types/misc/Func';
import { onTest } from '@@/utils/onTest';
import { interactionStates } from './interactionStates';

describe('interactionStates()', () => {
	let error: Error | null = null;
	let hasPrefocusEvent: unknown = null;
	let resetInteractionStates: unknown = null;
	let windowBlurredRecently: unknown = null;
	let result: unknown = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			({ hasPrefocusEvent, resetInteractionStates, windowBlurredRecently } =
				interactionStates());

			onTest(index, {
				3: () => {
					result = (hasPrefocusEvent as Func)();
				},
				4: () => {
					result = (hasPrefocusEvent as Func)(true);
				},
				5: () => {
					result = (windowBlurredRecently as Func)();
				},
				6: () => {
					result = (windowBlurredRecently as Func)(true);
				},
				7: () => {
					(resetInteractionStates as Func)();

					result =
						(hasPrefocusEvent as Func)() || (windowBlurredRecently as Func)();
				},
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.restoreAllMocks();

		hasPrefocusEvent = null;
		resetInteractionStates = null;
		windowBlurredRecently = null;
		result = null;
		error = null;
	});

	it('should not throw an error', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();
	});

	it('should return a set of functions for getting and setting the current interaction modality', () => {
		expect(index).toBe(2);

		expect(hasPrefocusEvent).toStrictEqual(expect.any(Function));
		expect(windowBlurredRecently).toStrictEqual(expect.any(Function));
	});

	it('should determine if a focus event has a preceding event when "hasPrefocusEvent()" is called without a value', () => {
		expect(index).toBe(3);
		expect(result).toBe(false);
	});

	it('should assert that a focus event has a preceding event when "hasPrefocusEvent()" is called with a value', () => {
		expect(index).toBe(4);
		expect(result).toBe(true);
	});

	it('should determine that the window has blurred recently when "windowBlurredRecently()" is called without a value', () => {
		expect(index).toBe(5);
		expect(result).toBe(false);
	});

	it('should assert that the window has blurred recently when "windowBlurredRecently()" is called with a value', () => {
		expect(index).toBe(6);
		expect(result).toBe(true);
	});

	it('should reset both states when "resetInteractionStates()" is called', () => {
		expect(index).toBe(7);
		expect(result).toBe(false);
	});
});
