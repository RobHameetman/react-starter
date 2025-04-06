import { faker } from '@faker-js/faker';
import { fakeMouseEvent } from '@/utils/functions/check/react/isMouseEvent/__test__';
import { manageVirtualClickModality } from '@/utils/functions/events/interactions/manageVirtualClickModality';
import { noop } from '@/utils/functions/misc/noop';
import { onTest } from '@test/utils/onTest';
import { handleGlobalMouseEvents } from './handleGlobalMouseEvents';

jest.mock(
	'@/utils/functions/events/interactions/manageVirtualClickModality',
	() => ({
		...jest.requireActual(
			'@/utils/functions/events/interactions/manageVirtualClickModality',
		),
		manageVirtualClickModality: jest.fn(),
	}),
);

jest.mock('@/utils/functions/misc/noop', () => ({
	...jest.requireActual('@/utils/functions/misc/noop'),
	noop: jest.fn(),
}));

describe('handleGlobalMouseEvents()', () => {
	let error: Error | null = null;
	let event: MouseEvent | null = null;
	let index = 0;

	beforeEach(() => {
		try {
			index++;

			onTest(index, {
				1: () => {
					event = fakeMouseEvent({ type: 'click' });
				},
				2: () => {
					event = fakeMouseEvent({
						type: faker.helpers.arrayElement([
							'auxclick',
							'contextmenu',
							'dblclick',
							'mousedown',
							'mouseenter',
							'mouseleave',
							'mousemove',
							'mouseout',
							'mouseover',
							'mouseup',
						]),
					});
				},
				3: () => {
					event = fakeMouseEvent({ type: 'keydown' });
				},
			});

			handleGlobalMouseEvents(event as MouseEvent);
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

	it('should manage virtual click modality given a "click" event', () => {
		expect(index).toBe(1);
		expect(error).toBeNull();

		expect(manageVirtualClickModality).toBeCalled();
	});

	it('should trigger an action given a valid MouseEvent', () => {
		expect(index).toBe(2);
		expect(error).toBeNull();

		expect(noop).toBeCalled();
	});

	it('should not trigger an action given an invalid MouseEvent', () => {
		expect(index).toBe(3);
		expect(error).toBeNull();

		expect(manageVirtualClickModality).not.toBeCalled();
		expect(noop).not.toBeCalled();
	});
});
