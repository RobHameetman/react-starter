import { faker } from '@faker-js/faker';
import { isUndefined } from './isUndefined';

describe('isUndefined()', () => {
	it('should return true given an undefined value', () => {
		expect(isUndefined(undefined)).toBe(true);
	});

	it('should return false given a string', () => {
		expect(isUndefined(faker.string.sample())).toBe(false);
	});

	it('should return false given an empty string', () => {
		expect(isUndefined('')).toBe(false);
	});

	it('should return false given an array of strings', () => {
		expect(isUndefined([faker.string.sample()])).toBe(false);
	});

	it('should return false given an empty array', () => {
		expect(isUndefined([])).toBe(false);
	});

	it('should return false given null', () => {
		expect(isUndefined(null)).toBe(false);
	});
});
