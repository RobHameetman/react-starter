import { isNonTextInputType } from './NonTextInputTypes';

describe('isNonTextInputType()', () => {
	it('should return true given the string value "button"', () => {
		expect(isNonTextInputType('button')).toBe(true);
	});

	it('should return true given the string value "checkbox"', () => {
		expect(isNonTextInputType('checkbox')).toBe(true);
	});

	it('should return true given the string value "color"', () => {
		expect(isNonTextInputType('color')).toBe(true);
	});

	it('should return true given the string value "file"', () => {
		expect(isNonTextInputType('file')).toBe(true);
	});

	it('should return true given the string value "image"', () => {
		expect(isNonTextInputType('image')).toBe(true);
	});

	it('should return true given the string value "radio"', () => {
		expect(isNonTextInputType('radio')).toBe(true);
	});

	it('should return true given the string value "range"', () => {
		expect(isNonTextInputType('range')).toBe(true);
	});

	it('should return true given the string value "reset"', () => {
		expect(isNonTextInputType('reset')).toBe(true);
	});

	it('should return true given the string value "submit"', () => {
		expect(isNonTextInputType('submit')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isNonTextInputType('')).toBe(false);
	});
});
