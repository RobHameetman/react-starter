import { faker } from '@faker-js/faker';
import { isNumber } from './isNumber';

describe('isNumber()', () => {
	it('should return true given a positive integer', () => {
		expect(isNumber(faker.number.int({ min: 1, max: 10 }))).toBe(true);
	});

	it('should return true given a negative integer', () => {
		expect(isNumber(faker.number.int({ min: -10, max: -1 }))).toBe(true);
	});

	it('should return true given the number zero', () => {
		expect(isNumber(0)).toBe(true);
	});

	it('should return false given an array of numbers', () => {
		expect(isNumber([faker.number.int()])).toBe(false);
	});

	it('should return false given null', () => {
		expect(isNumber(null)).toBe(false);
	});
});
