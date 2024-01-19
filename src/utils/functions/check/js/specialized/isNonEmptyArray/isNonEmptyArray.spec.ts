import { faker } from '@faker-js/faker';
import { isString } from '@app/utils/functions/check/js/core/isString';
import { isNonEmptyArray } from './isNonEmptyArray';

const isStringOrNumber = (value: unknown): value is string | number =>
	isString(value);

describe('isNonEmptyArray()', () => {
	it('should return true given a non-emtpy array', () => {
		expect(isNonEmptyArray([faker.string.sample()])).toBe(true);
	});

	it('should return false given an empty array', () => {
		expect(isNonEmptyArray([])).toBe(false);
	});

	it('should return true given an array of values and a valid type-guard', () => {
		expect(isNonEmptyArray<string>([faker.string.sample()], isString)).toBe(
			true,
		);
	});

	it('should return false given an array of values and an invalid type-guard', () => {
		expect(
			isNonEmptyArray<string | number>(
				[faker.string.sample(), faker.number.int()],
				isStringOrNumber,
			),
		).toBe(false);
	});

	it('should return false given an object', () => {
		expect(isNonEmptyArray({})).toBe(false);
	});

	it('should return false given null', () => {
		expect(isNonEmptyArray(null)).toBe(false);
	});
});
