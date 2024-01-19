/* eslint-disable prettier/prettier */

import { isUnicodeCharacterRange } from './UnicodeCharacterRanges';

describe('isUnicodeCharacterRange()', () => {
	it('should return true given the string value "\\ud800-\\udfff"', () => {
		expect(isUnicodeCharacterRange('\\ud800-\\udfff')).toBe(true);
	});

	it('should return true given the string value "\\u0300-\\u036f"', () => {
		expect(isUnicodeCharacterRange('\\u0300-\\u036f')).toBe(true);
	});

	it('should return true given the string value "\\ufe20-\\ufe2f"', () => {
		expect(isUnicodeCharacterRange('\\ufe20-\\ufe2f')).toBe(true);
	});

	it('should return true given the string value "\\u20d0-\\u20ff"', () => {
		expect(isUnicodeCharacterRange('\\u20d0-\\u20ff')).toBe(true);
	});

	it('should return true given the string value "\\u1ab0-\\u1aff"', () => {
		expect(isUnicodeCharacterRange('\\u1ab0-\\u1aff')).toBe(true);
	});

	it('should return true given the string value "\\u1dc0-\\u1dff"', () => {
		expect(isUnicodeCharacterRange('\\u1dc0-\\u1dff')).toBe(true);
	});

	it('should return true given the string value "\\u2700-\\u27bf"', () => {
		expect(isUnicodeCharacterRange('\\u2700-\\u27bf')).toBe(true);
	});

	it('should return true given the string value "a-z\\xdf-\\xf6\\xf8-\\xff"', () => {
		expect(isUnicodeCharacterRange('a-z\\xdf-\\xf6\\xf8-\\xff')).toBe(true);
	});

	it('should return true given the string value "A-Z\\xc0-\\xd6\\xd8-\\xde"', () => {
		expect(isUnicodeCharacterRange('A-Z\\xc0-\\xd6\\xd8-\\xde')).toBe(true);
	});

	it('should return true given the string value "\\ufe0e\\ufe0f"', () => {
		expect(isUnicodeCharacterRange('\\ufe0e\\ufe0f')).toBe(true);
	});

	it('should return true given the string value "\\xac\\xb1\\xd7\\xf7"', () => {
		expect(isUnicodeCharacterRange('\\xac\\xb1\\xd7\\xf7')).toBe(true);
	});

	it('should return true given the string value "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf"', () => {
		expect(
			isUnicodeCharacterRange('\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf'),
		).toBe(true);
	});

	it('should return true given the string value "\\u2000-\\u206f"', () => {
		expect(isUnicodeCharacterRange('\\u2000-\\u206f')).toBe(true);
	});

	it('should return true given the string value " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000"', () => {
		expect(isUnicodeCharacterRange(' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000')).toBe(true);
	});

	it('should return true given the string value "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff"', () => {
		expect(isUnicodeCharacterRange('\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff')).toBe(true);
	});

	it('should return true given the string value "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000"', () => {
		expect(isUnicodeCharacterRange('\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isUnicodeCharacterRange('')).toBe(false);
	});
});
