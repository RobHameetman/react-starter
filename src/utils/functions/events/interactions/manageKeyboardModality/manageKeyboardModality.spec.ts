import { fakeKeyboardEvent } from '@/utils/functions/check/react/isKeyboardEvent/__test__';
import { onTest } from '@@/utils/onTest';
import { manageKeyboardModality } from './manageKeyboardModality';

describe('manageKeyboardModality()', () => {
	let error: Error | null = null;
	let event: KeyboardEvent | null = null;
	let activate: jest.Mock | null = null;
	let hasPrefocusEvent: jest.Mock | null = null;
	let setModality: jest.Mock | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			onTest(index, {
				1: () => {
					event = fakeKeyboardEvent();
				},
				2: () => {
					event = fakeKeyboardEvent({ modified: false });
				},
				3: () => {
					event = fakeKeyboardEvent({ modified: true });
				},
			});

			hasPrefocusEvent = jest.fn();
			activate = jest.fn();
			setModality = jest.fn();

			const mockInteractionModality = jest.fn(() => ({
				setModality,
			}));

			const mockInteractionModalityListeners = jest.fn(() => ({
				activate,
			}));

			const mockInteractionStates = jest.fn(() => ({
				hasPrefocusEvent,
			}));

			manageKeyboardModality({
				event: event as KeyboardEvent,
				_dependencies: {
					/* @ts-expect-error - Type mismatch */
					interactionModality: mockInteractionModality,
					/* @ts-expect-error - Type mismatch */
					interactionModalityListeners: mockInteractionModalityListeners,
					/* @ts-expect-error - Type mismatch */
					interactionStates: mockInteractionStates,
				},
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.resetAllMocks();

		activate = null;
		hasPrefocusEvent = null;
		setModality = null;
		error = null;
	});

	it('should set the pre-focus event state to true', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(hasPrefocusEvent).toBeCalledWith(true);
	});

	it('should set the modality to "keyboard" and activate the modality listeners given an unmodified key press', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(setModality).toBeCalledWith('keyboard');
		expect(activate).toBeCalledWith('keyboard', event);
	});

	it('should not set the modality or activate the modality listeners given a modified key press', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();

		expect(setModality).not.toBeCalled();
		expect(activate).not.toBeCalled();
	});
});
