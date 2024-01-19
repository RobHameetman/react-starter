import { handleWindowBlur } from './handleWindowBlur';

describe('handleWindowBlur()', () => {
	let hasPrefocusEvent: jest.Mock | null = null;
	let resetInteractionStates: jest.Mock | null = null;
	let windowBlurredRecently: jest.Mock | null = null;
	let error: Error | null = null;

	beforeEach(() => {
		try {
			hasPrefocusEvent = jest.fn();
			resetInteractionStates = jest.fn();
			windowBlurredRecently = jest.fn();

			const mockInteractionStates = jest.fn(() => ({
				hasPrefocusEvent,
				resetInteractionStates,
				windowBlurredRecently,
			}));

			handleWindowBlur({
				_dependencies: {
					/* @ts-expect-error - Type 'null' is not assignable to type '(value?: boolean) => boolean'. */
					interactionStates: mockInteractionStates,
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

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should set the pre-focus state to `false`', () => {
		expect(hasPrefocusEvent).toBeCalledWith(false);
	});

	it('should set the blurred recently state to `true`', () => {
		expect(windowBlurredRecently).toBeCalledWith(true);
	});

	it('should not reset the interaction states', () => {
		expect(resetInteractionStates).not.toBeCalled();
	});
});
