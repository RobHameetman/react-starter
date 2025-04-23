import { faker } from '@faker-js/faker';
import { InteractionModality } from '@/utils/enums/InteractionModalities';
import { randomInteractionModality } from '@/utils/enums/InteractionModalities/__test__';
import { fakePointerEvent } from '@/utils/functions/check/react/isPointerEvent/__test__';
import { onTest } from '@@/utils/onTest';
import { managePointerModality } from './managePointerModality';

describe('managePointerModality()', () => {
	let error: Error | null = null;
	let event: PointerEvent | null = null;
	let activate: jest.Mock | null = null;
	let hasPrefocusEvent: jest.Mock | null = null;
	let modality: InteractionModality | null = null;
	let getModality: jest.Mock | null = null;
	let setModality: jest.Mock | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			onTest(index, {
				1: () => {
					modality = faker.helpers.arrayElement(['keyboard', 'virtual']);
					event = fakePointerEvent();
				},
				2: () => {
					modality = 'pointer';
					event = fakePointerEvent();
				},
				3: () => {
					modality = randomInteractionModality();
					event = fakePointerEvent({ type: 'pointerdown' });
				},
				4: () => {
					modality = randomInteractionModality();
					event = fakePointerEvent({ type: 'click' });
				},
			});

			hasPrefocusEvent = jest.fn();
			activate = jest.fn();

			getModality = jest.fn(() => modality);
			setModality = jest.fn();

			const mockInteractionModality = jest.fn(() => ({
				setModality,
				getModality,
			}));

			const mockInteractionModalityListeners = jest.fn(() => ({
				activate,
			}));

			const mockInteractionStates = jest.fn(() => ({
				hasPrefocusEvent,
			}));

			managePointerModality({
				event: event as PointerEvent,
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
		error = null;
		getModality = null;
		hasPrefocusEvent = null;
		modality = null;
		setModality = null;
	});

	it('should set the interaction modality to "pointer" when the current modality is not "pointer"', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(modality).not.toBe('pointer');
		expect(setModality).toBeCalledWith('pointer');
	});

	it('should not set the interaction modality to "pointer" when the current modality is "pointer"', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(modality).toBe('pointer');
		expect(setModality).not.toBeCalled();
	});

	it('should set the pre-focus event state to true and activate the modality listeners given a "mousedown" or "pointerdown" event', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();

		expect(hasPrefocusEvent).toBeCalledWith(true);
	});

	it('should not set the pre-focus event state to true or activate the modality listeners given an event which is not "mousedowwn" or "pointerdown"', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();

		expect(hasPrefocusEvent).not.toBeCalled();
		expect(activate).not.toBeCalled();
	});
});
