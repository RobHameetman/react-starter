import { isKeyboardEventType } from './KeyboardEventTypes';

describe('isKeyboardEventType()', () => {
	it('should return true given the string value "keydown"', () => {
		expect(isKeyboardEventType('keydown')).toBe(true);
	});

	it('should return true given the string value "keyup"', () => {
		expect(isKeyboardEventType('keyup')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isKeyboardEventType('')).toBe(false);
	});
});
