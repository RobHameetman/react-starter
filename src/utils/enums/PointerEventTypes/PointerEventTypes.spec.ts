import { isPointerEventType } from './PointerEventTypes';

describe('isPointerEventType()', () => {
	it('should return true given the string value "pointercancel"', () => {
		expect(isPointerEventType('pointercancel')).toBe(true);
	});

	it('should return true given the string value "pointerdown"', () => {
		expect(isPointerEventType('pointerdown')).toBe(true);
	});

	it('should return true given the string value "pointerenter"', () => {
		expect(isPointerEventType('pointerenter')).toBe(true);
	});

	it('should return true given the string value "pointerleave"', () => {
		expect(isPointerEventType('pointerleave')).toBe(true);
	});

	it('should return true given the string value "pointermove"', () => {
		expect(isPointerEventType('pointermove')).toBe(true);
	});

	it('should return true given the string value "pointerout"', () => {
		expect(isPointerEventType('pointerout')).toBe(true);
	});

	it('should return true given the string value "pointerover"', () => {
		expect(isPointerEventType('pointerover')).toBe(true);
	});

	it('should return true given the string value "pointerup"', () => {
		expect(isPointerEventType('pointerup')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isPointerEventType('')).toBe(false);
	});
});
