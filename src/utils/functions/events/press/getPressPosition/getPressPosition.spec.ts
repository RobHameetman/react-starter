import { faker } from '@faker-js/faker';
import { fakePressEvent } from '@/utils/types/events/PressEvent/__test__';
import { getPressPosition } from './getPressPosition';

jest.mock('../getPressPositionX', () => ({
	__esModule: true,
	default: undefined,
	getPressPositionX: jest
		.fn()
		.mockImplementation(() => faker.number.int({ min: 0, max: 100 })),
}));

jest.mock('../getPressPositionY', () => ({
	__esModule: true,
	default: undefined,
	getPressPositionY: jest
		.fn()
		.mockImplementation(() => faker.number.int({ min: 0, max: 100 })),
}));

describe('getPressPosition()', () => {
	let error: Error | null = null;
	let result: unknown = null;

	beforeEach(() => {
		try {
			const event = fakePressEvent<HTMLButtonElement>();

			result = getPressPosition(event);
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		error = null;
		result = null;
	});

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should return an object with x and y coordinates', () => {
		expect(result).toStrictEqual({
			x: expect.any(Number),
			y: expect.any(Number),
		});
	});
});
