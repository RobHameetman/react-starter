import { isKbdModifier } from './KbdModifiers';

describe('isKbdModifier()', () => {
	it('should return true given the string value "command"', () => {
		expect(isKbdModifier('command')).toBe(true);
	});

	it('should return true given the string value "shift"', () => {
		expect(isKbdModifier('shift')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isKbdModifier('')).toBe(false);
	});
});
