import { faker } from '@faker-js/faker';
import { isNumberGreaterThanZero } from './isNumberGreaterThanZero';

describe('isNumberGreaterThanZero()', () => {
	it('should return true given a positive integer', () => {
		expect(isNumberGreaterThanZero(faker.number.int({ min: 1, max: 10 }))).toBe(
			true,
		);
	});

	it('should return false given a negative integer', () => {
		expect(
			isNumberGreaterThanZero(faker.number.int({ min: -10, max: -1 })),
		).toBe(false);
	});

	it('should return false given the number zero', () => {
		expect(isNumberGreaterThanZero(0)).toBe(false);
	});
});
