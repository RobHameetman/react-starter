import { isHoverEventType } from './HoverEventTypes';

describe('isHoverEventType()', () => {
	it('should return true given the string value "mouseenter"', () => {
		expect(isHoverEventType('mouseenter')).toBe(true);
	});

	it('should return true given the string value "mouseleave"', () => {
		expect(isHoverEventType('mouseleave')).toBe(true);
	});

	it('should return true given the string value "mouseout"', () => {
		expect(isHoverEventType('mouseout')).toBe(true);
	});

	it('should return true given the string value "mouseover"', () => {
		expect(isHoverEventType('mouseover')).toBe(true);
	});

	it('should return true given the string value "pointerenter"', () => {
		expect(isHoverEventType('pointerenter')).toBe(true);
	});

	it('should return true given the string value "pointerleave"', () => {
		expect(isHoverEventType('pointerleave')).toBe(true);
	});

	it('should return true given the string value "pointerout"', () => {
		expect(isHoverEventType('pointerout')).toBe(true);
	});

	it('should return true given the string value "pointerover"', () => {
		expect(isHoverEventType('pointerover')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isHoverEventType('')).toBe(false);
	});
});
