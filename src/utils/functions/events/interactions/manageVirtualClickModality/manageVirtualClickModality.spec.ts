import { fakePointerEvent } from '@app/utils/functions/check/react/isPointerEvent/__test__';
import { onTest } from '@test/utils/onTest';
import { manageVirtualClickModality } from './manageVirtualClickModality';

describe('manageVirtualClickModality()', () => {
	let error: Error | null = null;
	let event: PointerEvent | null = null;
	let hasPrefocusEvent: jest.Mock | null = null;
	let setModality: jest.Mock | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			hasPrefocusEvent = jest.fn();
			setModality = jest.fn();

			const mockInteractionModality = jest.fn(() => ({
				setModality,
			}));

			const mockInteractionStates = jest.fn(() => ({
				hasPrefocusEvent,
			}));

			onTest(index, {
				1: () => {
					event = fakePointerEvent({ type: 'click', virtual: true });
				},
				2: () => {
					event = fakePointerEvent({ type: 'click', virtual: true });
				},
				3: () => {
					event = fakePointerEvent({ type: 'click', virtual: false });
				},
			});

			manageVirtualClickModality({
				event: event as PointerEvent,
				_dependencies: {
					/* @ts-expect-error - Type 'null' is not assignable to type '(modality: InteractionModality) => void'. */
					interactionModality: mockInteractionModality,
					/* @ts-expect-error - Type 'null' is not assignable to type '(states: InteractionStates) => void'. */
					interactionStates: mockInteractionStates,
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
		setModality = null;
		error = null;
	});

	it('should set the pre-focus event state to true given a virtual click event', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(hasPrefocusEvent).toBeCalledWith(true);
	});

	it('should set the interaction modality to "virtual" given a virtual click event', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(setModality).toBeCalledWith('virtual');
	});

	it('should do nothing given a concrete click event', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();

		expect(hasPrefocusEvent).not.toBeCalled();
		expect(setModality).not.toBeCalled();
	});
});
