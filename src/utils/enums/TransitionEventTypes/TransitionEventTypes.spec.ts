import { isTransitionEventType } from './TransitionEventTypes';

describe('isTransitionEventType()', () => {
	it('should return true given the string value "transitioncancel"', () => {
		expect(isTransitionEventType('transitioncancel')).toBe(true);
	});

	it('should return true given the string value "transitionend"', () => {
		expect(isTransitionEventType('transitionend')).toBe(true);
	});

	it('should return true given the string value "transitionrun"', () => {
		expect(isTransitionEventType('transitionrun')).toBe(true);
	});

	it('should return true given the string value "transitionstart"', () => {
		expect(isTransitionEventType('transitionstart')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isTransitionEventType('')).toBe(false);
	});
});
