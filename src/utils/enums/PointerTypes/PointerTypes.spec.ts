import { isPointerType } from './PointerTypes';

describe('isPointerType()', () => {
	it('should return true given the string value "mouse"', () => {
		expect(isPointerType('mouse')).toBe(true);
	});

	it('should return true given the string value "pen"', () => {
		expect(isPointerType('pen')).toBe(true);
	});

	it('should return true given the string value "touch"', () => {
		expect(isPointerType('touch')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isPointerType('')).toBe(false);
	});
});
