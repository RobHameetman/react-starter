import { onTest } from '@@/utils/onTest';
import { overrideNativeFocus } from './overrideNativeFocus';

describe('overrideNativeFocus()', () => {
	let hasPrefocusEvent: jest.Mock | null = null;
	let resetInteractionStates: jest.Mock | null = null;
	let windowBlurredRecently: jest.Mock | null = null;
	let error: Error | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			hasPrefocusEvent = jest.fn();
			resetInteractionStates = jest.fn();
			windowBlurredRecently = jest.fn();

			const mockInteractionStates = jest.fn(() => ({
				hasPrefocusEvent,
				resetInteractionStates,
				windowBlurredRecently,
			}));

			const restore = overrideNativeFocus({
				_dependencies: {
					/* @ts-expect-error - Type 'null' is not assignable to type '(value?: boolean) => boolean'. */
					interactionStates: mockInteractionStates,
				},
			});

			onTest(index, {
				1: () => {
					document.createElement('div').focus();
				},
				2: () => {
					restore();
					document.createElement('div').focus();
				},
			});
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		hasPrefocusEvent = null;
		resetInteractionStates = null;
		windowBlurredRecently = null;
		error = null;
	});

	it('should override the native "focus()" method on the HTMLElement class', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(hasPrefocusEvent).toBeCalledWith(true);
		expect(resetInteractionStates).not.toBeCalled();
		expect(windowBlurredRecently).not.toBeCalled();
	});

	it('should return a function which restores the native "focus()" method on the HTMLElement class', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(hasPrefocusEvent).not.toBeCalled();
		expect(resetInteractionStates).not.toBeCalled();
		expect(windowBlurredRecently).not.toBeCalled();
	});
});
