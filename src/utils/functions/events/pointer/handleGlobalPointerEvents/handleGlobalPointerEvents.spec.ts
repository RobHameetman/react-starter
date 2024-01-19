import { faker } from '@faker-js/faker';
import { fakePointerEvent } from '@app/utils/functions/check/react/isPointerEvent/__test__';
import { managePointerModality } from '@app/utils/functions/events/interactions/managePointerModality';
import { noop } from '@app/utils/functions/misc/noop';
import { onTest } from '@test/utils/onTest';
import { handleGlobalPointerEvents } from './handleGlobalPointerEvents';

jest.mock(
	'@app/utils/functions/events/interactions/managePointerModality',
	() => ({
		...jest.requireActual(
			'@app/utils/functions/events/interactions/managePointerModality',
		),
		managePointerModality: jest.fn(),
	}),
);

jest.mock('@app/utils/functions/misc/noop', () => ({
	...jest.requireActual('@app/utils/functions/misc/noop'),
	noop: jest.fn(),
}));

describe('handleGlobalPointerEvents()', () => {
	let error: Error | null = null;
	let event: PointerEvent | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			onTest(index, {
				1: () => {
					event = fakePointerEvent({ type: 'pointerdown' });
				},
				2: () => {
					event = fakePointerEvent({ type: 'pointermove' });
				},
				3: () => {
					event = fakePointerEvent({ type: 'pointerup' });
				},
				4: () => {
					event = fakePointerEvent({ type: 'pointercancel' });
				},
				5: () => {
					event = fakePointerEvent({ type: 'pointerenter' });
				},
				6: () => {
					event = fakePointerEvent({ type: 'pointerleave' });
				},
				7: () => {
					event = fakePointerEvent({ type: 'pointerout' });
				},
				8: () => {
					event = fakePointerEvent({ type: 'pointerover' });
				},
				9: () => {
					event = fakePointerEvent({ type: 'transitionstart' });
				},
			});

			handleGlobalPointerEvents(event as PointerEvent);
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

	it('should manage pointer modality given an event with type "pointerdown"', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(managePointerModality).toBeCalled();
		expect(noop).not.toBeCalled();
	});

	it('should manage pointer modality given an event with type "pointermove"', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(managePointerModality).toBeCalled();
		expect(noop).not.toBeCalled();
	});

	it('should manage pointer modality given an event with type "pointerup"', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();

		expect(managePointerModality).toBeCalled();
		expect(noop).not.toBeCalled();
	});

	it('should trigger an action given an event with type "pointercancel"', () => {
		expect(index).toBe(4);
		expect(error).toBeNull();

		expect(noop).toBeCalled();
		expect(managePointerModality).not.toBeCalled();
	});

	it('should trigger an action given an event with type "pointerenter"', () => {
		expect(index).toBe(5);
		expect(error).toBeNull();

		expect(noop).toBeCalled();
		expect(managePointerModality).not.toBeCalled();
	});

	it('should trigger an action given an event with type "pointerleave"', () => {
		expect(index).toBe(6);
		expect(error).toBeNull();

		expect(noop).toBeCalled();
		expect(managePointerModality).not.toBeCalled();
	});

	it('should trigger an action given an event with type "pointerout"', () => {
		expect(index).toBe(7);
		expect(error).toBeNull();

		expect(noop).toBeCalled();
		expect(managePointerModality).not.toBeCalled();
	});

	it('should trigger an action given an event with type "pointerover"', () => {
		expect(index).toBe(8);
		expect(error).toBeNull();

		expect(noop).toBeCalled();
		expect(managePointerModality).not.toBeCalled();
	});

	it('should not trigger an action given an invalid PointerEvent', () => {
		expect(index).toBe(9);
		expect(error).toBeNull();

		expect(managePointerModality).not.toBeCalled();
		expect(noop).not.toBeCalled();
	});
});
