import { isStringEnumValue } from './StringEnumValues';

describe('isStringEnumValue()', () => {
	it('should return true given the string value "This"', () => {
		expect(isStringEnumValue('This')).toBe(true);
	});

	it('should return true given the string value "That"', () => {
		expect(isStringEnumValue('That')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isStringEnumValue('')).toBe(false);
	});
});
