import { faker } from '@faker-js/faker';
import { isString } from '@/utils/functions/check/js/core/isString';
import { isDateInput } from './isDateInput';

const isStringOrNumber = (value: unknown): value is string | number =>
	isString(value);

describe('isDateInput()', () => {
	it('should return true given a date string', () => {
		expect(isDateInput('1989-06-13')).toBe(true);
	});

	it('should return true given a number', () => {
		expect(isDateInput(faker.number.int({ min: 1, max: Date.now() }))).toBe(
			true,
		);
	});

	it('should return true given a Date', () => {
		expect(isDateInput(new Date())).toBe(true);
	});

	it('should return true given an object with values of type T and a valid type-guard for type T', () => {
		expect(isDateInput<string>('1989-06-13', isString)).toBe(true);
	});

	it('should return false given an object with values of type T and an invalid type-guard for type T', () => {
		expect(
			isDateInput<string | number>(
				faker.number.int({ min: 1, max: Date.now() }),
				isStringOrNumber,
			),
		).toBe(false);
	});

	it('should return false given null', () => {
		expect(isDateInput(null)).toBe(false);
	});
});
