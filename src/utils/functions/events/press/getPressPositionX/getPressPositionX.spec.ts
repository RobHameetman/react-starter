import { faker } from '@faker-js/faker';
import { fakePressEvent } from '@/utils/types/events/PressEvent/__test__';
import { isPointerEvent } from '@/utils/functions';
import { fakeDOMRect } from '@test/fakes/fakeDOMRect';
import { getPressPositionX } from './getPressPositionX';

describe('getPressPositionX()', () => {
	let $testBtn: HTMLButtonElement | null = null;
	let clientWidth: number | null = null;
	let error: Error | null = null;
	let expectedX: number | null = null;
	let result: unknown = null;

	beforeEach(() => {
		try {
			$testBtn = document.createElement('button');
			clientWidth = faker.number.int({ min: 30, max: 90 });

			const offsetLeft = faker.number.int({ min: 0, max: 3 * clientWidth });
			const x = faker.number.int({ min: 0, max: clientWidth });

			const event = fakePressEvent<HTMLButtonElement>({
				currentTarget: $testBtn,
				clientX: x,
				nativeEvent: {
					offsetX: x,
				},
			});

			jest
				.spyOn(event.currentTarget, 'getBoundingClientRect')
				.mockImplementation(() => fakeDOMRect({ left: offsetLeft }));

			if (!isPointerEvent(event)) {
				jest
					.spyOn(event.currentTarget, 'clientWidth', 'get')
					.mockImplementation(() => clientWidth ?? 0);

				expectedX = clientWidth / 2;
			} else {
				expectedX =
					event.clientX - offsetLeft >= 0
						? event.clientX - offsetLeft
						: event.nativeEvent.offsetX;
			}

			result = getPressPositionX(event);
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.restoreAllMocks();

		$testBtn = null;
		clientWidth = null;
		error = null;
		expectedX = null;
		result = null;
	});

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should return the correct X coordinate', () => {
		expect(result).toStrictEqual(expectedX);
	});

	it('should never return a negative number', () => {
		expect(result).toBeGreaterThanOrEqual(0);
	});

	it('should never never exceed the width of the current target element', () => {
		expect(result).toBeLessThanOrEqual(clientWidth ?? -1);
	});
});
