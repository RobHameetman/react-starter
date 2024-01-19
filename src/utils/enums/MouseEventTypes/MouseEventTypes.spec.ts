import { isMouseEventType } from './MouseEventTypes';

describe('isMouseEventType()', () => {
	it('should return true given the string value "auxclick"', () => {
		expect(isMouseEventType('auxclick')).toBe(true);
	});

	it('should return true given the string value "click"', () => {
		expect(isMouseEventType('click')).toBe(true);
	});

	it('should return true given the string value "contextmenu"', () => {
		expect(isMouseEventType('contextmenu')).toBe(true);
	});

	it('should return true given the string value "dblclick"', () => {
		expect(isMouseEventType('dblclick')).toBe(true);
	});

	it('should return true given the string value "mousedown"', () => {
		expect(isMouseEventType('mousedown')).toBe(true);
	});

	it('should return true given the string value "mouseenter"', () => {
		expect(isMouseEventType('mouseenter')).toBe(true);
	});

	it('should return true given the string value "mouseleave"', () => {
		expect(isMouseEventType('mouseleave')).toBe(true);
	});

	it('should return true given the string value "mousemove"', () => {
		expect(isMouseEventType('mousemove')).toBe(true);
	});

	it('should return true given the string value "mouseout"', () => {
		expect(isMouseEventType('mouseout')).toBe(true);
	});

	it('should return true given the string value "mouseover"', () => {
		expect(isMouseEventType('mouseover')).toBe(true);
	});

	it('should return true given the string value "mouseup"', () => {
		expect(isMouseEventType('mouseup')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isMouseEventType('')).toBe(false);
	});
});
