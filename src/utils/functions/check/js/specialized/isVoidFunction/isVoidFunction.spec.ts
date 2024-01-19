import { isVoidFunction } from './isVoidFunction';

describe('isVoidFunction()', () => {
	it('should return true given a function which does not return a value', () => {
		expect(isVoidFunction(() => {})).toBe(true);
	});

	it('should return false given a function which does return a value', () => {
		expect(isVoidFunction(() => true, ['some', 'args'])).toBe(false);
	});
});
