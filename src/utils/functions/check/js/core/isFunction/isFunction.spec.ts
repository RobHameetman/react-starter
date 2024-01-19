import { faker } from '@faker-js/faker';
import { isFunction } from './isFunction';

describe('isFunction()', () => {
	it('should return true given a function', () => {
		expect(isFunction(() => {})).toBe(true);
	});

	it('should return true given an immediately invoked function which returns a function', () => {
		expect(isFunction((() => () => {})())).toBe(true);
	});

	it('should return false given an immediately invoked function which does not return a function', () => {
		expect(isFunction((() => {})())).toBe(false);
	});
});
