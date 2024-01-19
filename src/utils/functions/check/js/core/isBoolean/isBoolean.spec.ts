import { faker } from '@faker-js/faker';
import { isBoolean } from './isBoolean';

describe('isBoolean()', () => {
	it('should return true given a boolean', () => {
		expect(isBoolean(faker.datatype.boolean())).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isBoolean('')).toBe(false);
	});

	it('should return false given the number zero', () => {
		expect(isBoolean(0)).toBe(false);
	});

	it('should return false given an array of booleans', () => {
		expect(isBoolean([faker.datatype.boolean()])).toBe(false);
	});

	it('should return false given null', () => {
		expect(isBoolean(null)).toBe(false);
	});
});
