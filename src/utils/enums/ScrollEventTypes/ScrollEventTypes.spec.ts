import { isScrollEventType } from './ScrollEventTypes';

describe('isScrollEventType()', () => {
	it('should return true given the string value "scroll"', () => {
		expect(isScrollEventType('scroll')).toBe(true);
	});

	it('should return true given the string value "scrollend"', () => {
		expect(isScrollEventType('scrollend')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isScrollEventType('')).toBe(false);
	});
});
