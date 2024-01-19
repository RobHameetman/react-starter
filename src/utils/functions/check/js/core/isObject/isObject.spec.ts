import { faker } from '@faker-js/faker';
import { isString } from '@app/utils/functions/check/js/core/isString';
import { isObject } from './isObject';

const isStringOrNumber = (value: unknown): value is string | number =>
	isString(value);

describe('isObject()', () => {
	it('should return true given a non-emtpy object', () => {
		expect(isObject({ test: faker.string.sample() })).toBe(true);
	});

	it('should return true given an empty object', () => {
		expect(isObject({})).toBe(true);
	});

	it('should return true given an object with values of type T and a valid type-guard for type T', () => {
		expect(isObject<string>({ test: faker.string.sample() }, isString)).toBe(
			true,
		);
	});

	it('should return false given an object with values of type T and an invalid type-guard for type T', () => {
		expect(
			isObject<string | number>(
				{ stringProp: faker.string.sample(), numProp: faker.number.int() },
				isStringOrNumber,
			),
		).toBe(false);
	});

	it('should return false given an array', () => {
		expect(isObject([])).toBe(false);
	});

	it('should return false given null', () => {
		expect(isObject(null)).toBe(false);
	});
});
