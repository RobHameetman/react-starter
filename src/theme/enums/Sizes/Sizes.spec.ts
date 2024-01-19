import { isSize } from './Sizes';

describe('isSize()', () => {
	it('should return true given the string value "xs"', () => {
		expect(isSize('xs')).toBe(true);
	});

	it('should return true given the string value "sm"', () => {
		expect(isSize('sm')).toBe(true);
	});

	it('should return true given the string value "md"', () => {
		expect(isSize('md')).toBe(true);
	});

	it('should return true given the string value "lg"', () => {
		expect(isSize('lg')).toBe(true);
	});

	it('should return true given the string value "xl"', () => {
		expect(isSize('xl')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isSize('')).toBe(false);
	});
});
