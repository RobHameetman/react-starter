import { faker } from '@faker-js/faker';
import { fakeFocusEvent } from '@app/utils/functions/check/react/isFocusEvent/__test__';
import { onTest } from '@test/utils/onTest';
import { manageFocusModality } from './manageFocusModality';

describe('manageFocusModality()', () => {
	let error: Error | null = null;
	let event: FocusEvent | null = null;
	let activate: jest.Mock | null = null;
	let hasPrefocusEvent: jest.Mock | null = null;
	let resetInteractionStates: jest.Mock | null = null;
	let setModality: jest.Mock | null = null;
	let windowBlurredRecently: jest.Mock | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			onTest(index, {
				1: () => {
					event = fakeFocusEvent({
						target: faker.helpers.arrayElement([window, document]),
					});

					hasPrefocusEvent = jest.fn();
					windowBlurredRecently = jest.fn();
				},
				2: () => {
					event = fakeFocusEvent();

					hasPrefocusEvent = jest.fn(() => false);
					windowBlurredRecently = jest.fn(() => false);
				},
				3: () => {
					event = fakeFocusEvent();

					hasPrefocusEvent = jest.fn(() => true);
					windowBlurredRecently = jest.fn(() => false);
				},
				4: () => {
					event = fakeFocusEvent();

					hasPrefocusEvent = jest.fn(() => false);
					windowBlurredRecently = jest.fn(() => true);
				},
				5: () => {
					event = fakeFocusEvent();

					hasPrefocusEvent = jest.fn(() => faker.datatype.boolean());
					windowBlurredRecently = jest.fn(() => faker.datatype.boolean());
				},
			});

			activate = jest.fn();
			resetInteractionStates = jest.fn();
			setModality = jest.fn();

			const mockInteractionModality = jest.fn(() => ({
				setModality,
			}));

			const mockInteractionModalityListeners = jest.fn(() => ({
				activate,
			}));

			const mockInteractionStates = jest.fn(() => ({
				hasPrefocusEvent,
				resetInteractionStates,
				windowBlurredRecently,
			}));

			manageFocusModality({
				event: event as FocusEvent,
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
		resetInteractionStates = null;
		setModality = null;
		windowBlurredRecently = null;
		error = null;
	});

	it('should do nothing given a FocusEvent with the `window` or `document` object as the target', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(activate).not.toBeCalled();
		expect(hasPrefocusEvent).not.toBeCalled();
		expect(resetInteractionStates).not.toBeCalled();
		expect(setModality).not.toBeCalled();
		expect(windowBlurredRecently).not.toBeCalled();
	});

	it('should set the modality to "virtual" and activate the modality listeners when not after a pre-focus event and the `window` has not lost focus recently', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(setModality).toBeCalledWith('virtual');
		expect(activate).toBeCalledWith('virtual', event);
	});

	it('should not set the modality or activate the modality listeners when after a pre-focus event', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();

		expect(setModality).not.toBeCalled();
		expect(activate).not.toBeCalled();
	});

	it('should not set the modality or activate the modality listeners when the `window` has lost focus recently', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();

		expect(setModality).not.toBeCalled();
		expect(activate).not.toBeCalled();
	});

	it('should reset all interaction states', () => {
		expect(index).toBe(5);
		expect(error).toBeNull();

		expect(resetInteractionStates).toBeCalled();
	});
});
