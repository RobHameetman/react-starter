import { isTouchEventType } from './TouchEventTypes';

describe('isTouchEventType()', () => {
	it('should return true given the string value "touchcancel"', () => {
		expect(isTouchEventType('touchcancel')).toBe(true);
	});

	it('should return true given the string value "touchend"', () => {
		expect(isTouchEventType('touchend')).toBe(true);
	});

	it('should return true given the string value "touchmove"', () => {
		expect(isTouchEventType('touchmove')).toBe(true);
	});

	it('should return true given the string value "touchstart"', () => {
		expect(isTouchEventType('touchstart')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isTouchEventType('')).toBe(false);
	});
});
