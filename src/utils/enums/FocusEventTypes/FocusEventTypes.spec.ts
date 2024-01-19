import { isFocusEventType } from './FocusEventTypes';

describe('isFocusEventType()', () => {
	it('should return true given the string value "blur"', () => {
		expect(isFocusEventType('blur')).toBe(true);
	});

	it('should return true given the string value "focus"', () => {
		expect(isFocusEventType('focus')).toBe(true);
	});

	it('should return true given the string value "focusin"', () => {
		expect(isFocusEventType('focusin')).toBe(true);
	});

	it('should return true given the string value "focusout"', () => {
		expect(isFocusEventType('focusout')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isFocusEventType('')).toBe(false);
	});
});
