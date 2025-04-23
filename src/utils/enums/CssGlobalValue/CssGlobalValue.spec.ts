import { isCssGlobalValue } from './CssGlobalValue';

describe('isCssGlobalValue()', () => {
	it('should return true given the string value "inherit"', () => {
		expect(isCssGlobalValue('inherit')).toBe(true);
	});

	it('should return true given the string value "initial"', () => {
		expect(isCssGlobalValue('initial')).toBe(true);
	});

	it('should return true given the string value "revert"', () => {
		expect(isCssGlobalValue('revert')).toBe(true);
	});

	it('should return true given the string value "revert-layer"', () => {
		expect(isCssGlobalValue('revert-layer')).toBe(true);
	});

	it('should return true given the string value "unset"', () => {
		expect(isCssGlobalValue('unset')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isCssGlobalValue('')).toBe(false);
	});
});
