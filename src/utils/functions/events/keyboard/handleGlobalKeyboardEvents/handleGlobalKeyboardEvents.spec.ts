import { fakeKeyboardEvent } from '@/utils/functions/check/react/isKeyboardEvent/__test__';
import { manageKeyboardModality } from '@/utils/functions/events/interactions/manageKeyboardModality';
import { onTest } from '@@/utils/onTest';
import { handleGlobalKeyboardEvents } from './handleGlobalKeyboardEvents';

jest.mock(
	'@/utils/functions/events/interactions/manageKeyboardModality',
	() => ({
		...jest.requireActual(
			'@/utils/functions/events/interactions/manageKeyboardModality',
		),
		manageKeyboardModality: jest.fn(),
	}),
);

describe('handleGlobalKeyboardEvents()', () => {
	let error: Error | null = null;
	let event: KeyboardEvent | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			onTest(index, {
				1: () => {
					event = fakeKeyboardEvent();
				},
				2: () => {
					event = fakeKeyboardEvent({ type: 'click' });
				},
			});

			handleGlobalKeyboardEvents(event as KeyboardEvent);
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.resetAllMocks();

		error = null;
		event = null;
	});

	afterAll(() => {
		jest.restoreAllMocks();
	});

	it('should manage the "keyboard" modality given a valid KeyboardEvent', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(manageKeyboardModality).toBeCalled();
	});

	it('should not manage the "keyboard" modality given an invalid KeyboardEvent', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(manageKeyboardModality).not.toBeCalled();
	});
});
