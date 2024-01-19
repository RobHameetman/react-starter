import { faker } from '@faker-js/faker';
import { isNull } from './isNull';

describe('isNull()', () => {
	it('should return true given null', () => {
		expect(isNull(null)).toBe(true);
	});

	it('should return false given an undefined value', () => {
		expect(isNull(undefined)).toBe(false);
	});

	it('should return false given a string', () => {
		expect(isNull(faker.string.sample())).toBe(false);
	});

	it('should return false given an empty string', () => {
		expect(isNull('')).toBe(false);
	});

	it('should return false given an array of strings', () => {
		expect(isNull([faker.string.sample()])).toBe(false);
	});

	it('should return false given an empty array', () => {
		expect(isNull([])).toBe(false);
	});
});
