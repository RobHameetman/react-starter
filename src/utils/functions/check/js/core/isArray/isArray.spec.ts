import { faker } from '@faker-js/faker';
import { isString } from '@app/utils/functions/check/js/core/isString';
import { isArray } from './isArray';

const isStringOrNumber = (value: unknown): value is string | number =>
	isString(value);

describe('isArray()', () => {
	it('should return true given a non-emtpy array', () => {
		expect(isArray([faker.string.sample()])).toBe(true);
	});

	it('should return true given an empty array', () => {
		expect(isArray([])).toBe(true);
	});

	it('should return true given an array of values and a valid type-guard', () => {
		expect(isArray<string>([faker.string.sample()], isString)).toBe(true);
	});

	it('should return false given an array of values and an invalid type-guard', () => {
		expect(
			isArray<string | number>(
				[faker.string.sample(), faker.number.int()],
				isStringOrNumber,
			),
		).toBe(false);
	});

	it('should return false given an object', () => {
		expect(isArray({})).toBe(false);
	});

	it('should return false given null', () => {
		expect(isArray(null)).toBe(false);
	});
});
