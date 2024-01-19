import { isPressEventType } from './PressEventTypes';

describe('isPressEventType()', () => {
	it('should return true given the string value "click"', () => {
		expect(isPressEventType('click')).toBe(true);
	});

	it('should return true given the string value "dragstart"', () => {
		expect(isPressEventType('dragstart')).toBe(true);
	});

	it('should return true given the string value "keydown"', () => {
		expect(isPressEventType('keydown')).toBe(true);
	});

	it('should return true given the string value "keyup"', () => {
		expect(isPressEventType('keyup')).toBe(true);
	});

	it('should return true given the string value "mousedown"', () => {
		expect(isPressEventType('mousedown')).toBe(true);
	});

	it('should return true given the string value "mouseenter"', () => {
		expect(isPressEventType('mouseenter')).toBe(true);
	});

	it('should return true given the string value "mouseleave"', () => {
		expect(isPressEventType('mouseleave')).toBe(true);
	});

	it('should return true given the string value "mouseup"', () => {
		expect(isPressEventType('mouseup')).toBe(true);
	});

	it('should return true given the string value "pointerdown"', () => {
		expect(isPressEventType('pointerdown')).toBe(true);
	});

	it('should return true given the string value "pointerenter"', () => {
		expect(isPressEventType('pointerenter')).toBe(true);
	});

	it('should return true given the string value "pointerleave"', () => {
		expect(isPressEventType('pointerleave')).toBe(true);
	});

	it('should return true given the string value "pointerup"', () => {
		expect(isPressEventType('pointerup')).toBe(true);
	});

	it('should return true given the string value "touchcancel"', () => {
		expect(isPressEventType('touchcancel')).toBe(true);
	});

	it('should return true given the string value "touchend"', () => {
		expect(isPressEventType('touchend')).toBe(true);
	});

	it('should return true given the string value "touchmove"', () => {
		expect(isPressEventType('touchmove')).toBe(true);
	});

	it('should return true given the string value "touchstart"', () => {
		expect(isPressEventType('touchstart')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isPressEventType('')).toBe(false);
	});
});
