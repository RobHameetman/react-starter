/* eslint-disable prettier/prettier */

import { isUnicodeCaptureGroup } from './UnicodeCaptureGroups';

describe('isUnicodeCaptureGroup()', () => {
	it('should return true given the string value "[\'\u2019]"', () => {
		expect(isUnicodeCaptureGroup("['\u2019]")).toBe(true);
	});

	it('should return true given the string value "[\\ud800-\\udfff]"', () => {
		expect(isUnicodeCaptureGroup('[\\ud800-\\udfff]')).toBe(true);
	});

	it('should return true given the string value "[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]"', () => {
		expect(isUnicodeCaptureGroup('[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]')).toBe(true);
	});

	it('should return true given the string value "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]"', () => {
		expect(isUnicodeCaptureGroup('[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]')).toBe(true);
	});

	it('should return true given the string value "\\d"', () => {
		expect(isUnicodeCaptureGroup('\\d')).toBe(true);
	});

	it('should return true given the string value "[\\u2700-\\u27bf]"', () => {
		expect(isUnicodeCaptureGroup('[\\u2700-\\u27bf]')).toBe(true);
	});

	it('should return true given the string value "[a-z\\xdf-\\xf6\\xf8-\\xff]"', () => {
		expect(isUnicodeCaptureGroup('[a-z\\xdf-\\xf6\\xf8-\\xff]')).toBe(true);
	});

	it('should return true given the string value "[A-Z\\xc0-\\xd6\\xd8-\\xde]"', () => {
		expect(isUnicodeCaptureGroup('[A-Z\\xc0-\\xd6\\xd8-\\xde]')).toBe(true);
	});

	it('should return true given the string value "[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]"', () => {
		expect(isUnicodeCaptureGroup('[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]')).toBe(true);
	});

	it('should return true given the string value "\\ud83c[\\udffb-\\udfff]"', () => {
		expect(isUnicodeCaptureGroup('\\ud83c[\\udffb-\\udfff]')).toBe(true);
	});

	it('should return true given the string value "(?:\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff|\\ud83c[\\udffb-\\udfff])"', () => {
		expect(isUnicodeCaptureGroup('(?:\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff|\\ud83c[\\udffb-\\udfff])')).toBe(true);
	});

	it('should return true given the string value "[^\\ud800-\\udfff]"', () => {
		expect(isUnicodeCaptureGroup('[^\\ud800-\\udfff]')).toBe(true);
	});

	it('should return true given the string value "(?:\\ud83c[\\udde6-\\uddff]){2}"', () => {
		expect(isUnicodeCaptureGroup('(?:\\ud83c[\\udde6-\\uddff]){2}')).toBe(true);
	});

	it('should return true given the string value "[\\ud800-\\udbff][\\udc00-\\udfff]"', () => {
		expect(isUnicodeCaptureGroup('[\\ud800-\\udbff][\\udc00-\\udfff]')).toBe(true);
	});

	it('should return true given the string value "\\u200d"', () => {
		expect(isUnicodeCaptureGroup('\\u200d')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isUnicodeCaptureGroup('')).toBe(false);
	});
});
