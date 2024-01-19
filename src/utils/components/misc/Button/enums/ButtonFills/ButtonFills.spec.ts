import { isButtonFill } from './ButtonFills';

describe('isButtonFill()', () => {
	it('should return true given the string value "filled"', () => {
		expect(isButtonFill('filled')).toBe(true);
	});

	it('should return true given the string value "outlined"', () => {
		expect(isButtonFill('outlined')).toBe(true);
	});

	it('should return true given the string value "transparent"', () => {
		expect(isButtonFill('transparent')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isButtonFill('')).toBe(false);
	});
});
