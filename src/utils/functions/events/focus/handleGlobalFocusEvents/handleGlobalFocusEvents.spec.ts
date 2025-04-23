import { faker } from '@faker-js/faker';
import { fakeFocusEvent } from '@/utils/functions/check/react/isFocusEvent/__test__';
import { handleWindowBlur } from '@/utils/functions/events/focus/handleWindowBlur';
import { manageFocusModality } from '@/utils/functions/events/interactions/manageFocusModality';
import { noop } from '@/utils/functions/misc/noop';
import { onTest } from '@@/utils/onTest';
import { handleGlobalFocusEvents } from './handleGlobalFocusEvents';

jest.mock('@/utils/functions/events/focus/handleWindowBlur', () => ({
	...jest.requireActual('@/utils/functions/events/focus/handleWindowBlur'),
	handleWindowBlur: jest.fn(),
}));

jest.mock(
	'@/utils/functions/events/interactions/manageFocusModality',
	() => ({
		...jest.requireActual(
			'@/utils/functions/events/interactions/manageFocusModality',
		),
		manageFocusModality: jest.fn(),
	}),
);

jest.mock('@/utils/functions/misc/noop', () => ({
	...jest.requireActual('@/utils/functions/misc/noop'),
	noop: jest.fn(),
}));

describe('handleGlobalFocusEvents()', () => {
	let error: Error | null = null;
	let event: FocusEvent | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			onTest(index, {
				1: () => {
					event = fakeFocusEvent({ type: 'blur' });
				},
				2: () => {
					event = fakeFocusEvent({ type: 'focus' });
				},
				3: () => {
					event = fakeFocusEvent({
						type: faker.helpers.arrayElement(['focusin', 'focusout']),
					});
				},
				4: () => {
					event = fakeFocusEvent({ type: 'click' });
				},
			});

			handleGlobalFocusEvents(event as FocusEvent);
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

	it('should handle "blur" events dispatched from the window object', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(handleWindowBlur).toBeCalled();
	});

	it('should manage focus modality given a "focus" event', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(manageFocusModality).toBeCalled();
	});

	it('should trigger an action given a valid FocusEvent', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();

		expect(noop).toBeCalled();
	});

	it('should not trigger an action given an invalid FocusEvent', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();

		expect(handleWindowBlur).not.toBeCalled();
		expect(manageFocusModality).not.toBeCalled();
		expect(noop).not.toBeCalled();
	});
});
