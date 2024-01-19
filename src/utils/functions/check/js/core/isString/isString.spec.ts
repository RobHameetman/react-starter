import { faker } from '@faker-js/faker';
import { isString } from './isString';

describe('isString()', () => {
	it('should return true given a string', () => {
		expect(isString(faker.string.sample())).toBe(true);
	});

	it('should return true given an empty string', () => {
		expect(isString('')).toBe(true);
	});

	it('should return false given an array of strings', () => {
		expect(isString([faker.string.sample()])).toBe(false);
	});

	it('should return false given null', () => {
		expect(isString(null)).toBe(false);
	});
});
