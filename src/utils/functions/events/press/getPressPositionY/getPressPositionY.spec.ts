import { faker } from '@faker-js/faker';
import { fakePressEvent } from '@/utils/types/events/PressEvent/__test__';
import { isPointerEvent } from '@/utils/functions';
import { getPressPositionY } from './getPressPositionY';

describe('getPressPositionY()', () => {
	let $testBtn: HTMLButtonElement | null = null;
	let clientHeight: number | null = null;
	let error: Error | null = null;
	let expectedY: number | null = null;
	let result: unknown = null;

	beforeEach(() => {
		try {
			$testBtn = document.createElement('button');
			clientHeight = faker.number.int({ min: 30, max: 90 });

			const offsetTop = faker.number.int({ min: 0, max: 3 * clientHeight });
			const y = faker.number.int({ min: 0, max: clientHeight });

			const event = fakePressEvent<HTMLButtonElement>({
				currentTarget: $testBtn,
				clientY: y,
				nativeEvent: {
					offsetY: y,
				},
			});

			jest
				.spyOn(event.currentTarget, 'offsetTop', 'get')
				.mockImplementation(() => offsetTop);

			if (!isPointerEvent(event)) {
				jest
					.spyOn(event.currentTarget, 'clientHeight', 'get')
					.mockImplementation(() => clientHeight ?? 0);

				expectedY = clientHeight / 2;
			} else {
				expectedY =
					event.clientY - offsetTop >= 0
						? event.clientY - offsetTop
						: event.nativeEvent.offsetY;
			}

			result = getPressPositionY(event);
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.restoreAllMocks();

		$testBtn = null;
		clientHeight = null;
		error = null;
		expectedY = null;
		result = null;
	});

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should return the correct y coordinate', () => {
		expect(result).toStrictEqual(expectedY);
	});

	it('should never return a negative number', () => {
		expect(result).toBeGreaterThanOrEqual(0);
	});

	it('should never never exceed the height of the current target element', () => {
		expect(result).toBeLessThanOrEqual(clientHeight ?? -1);
	});
});
