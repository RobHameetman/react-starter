import { faker } from '@faker-js/faker';
import { isNonNegativeNumber } from './isNonNegativeNumber';

describe('isNonNegativeNumber()', () => {
	it('should return true given a positive integer', () => {
		expect(isNonNegativeNumber(faker.number.int({ min: 1, max: 10 }))).toBe(
			true,
		);
	});

	it('should return false given a negative integer', () => {
		expect(isNonNegativeNumber(faker.number.int({ min: -10, max: -1 }))).toBe(
			false,
		);
	});

	it('should return true given the number zero', () => {
		expect(isNonNegativeNumber(0)).toBe(true);
	});
});
