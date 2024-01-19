import { isCardVariant } from './CardVariants';

describe('isCardVariant()', () => {
	it('should return true given the string value "bordered"', () => {
		expect(isCardVariant('bordered')).toBe(true);
	});

	it('should return true given the string value "flat"', () => {
		expect(isCardVariant('flat')).toBe(true);
	});

	it('should return true given the string value "shadow"', () => {
		expect(isCardVariant('shadow')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isCardVariant('')).toBe(false);
	});
});
