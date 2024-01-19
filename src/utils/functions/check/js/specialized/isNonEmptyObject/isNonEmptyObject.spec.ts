import { isNonEmptyObject } from './isNonEmptyObject';

describe('isNonEmptyObject', () => {
	it('should return true given a non-emtpy object', () => {
		expect(
			isNonEmptyObject({
				prop1: '3i04c3c',
				prop2: 'c3nrcu43fim',
			}),
		).toBe(true);
	});

	it('should return false given an empty object', () => {
		expect(isNonEmptyObject({})).toBe(false);
	});

	it('should return false given an array', () => {
		expect(isNonEmptyObject([])).toBe(false);
	});

	it('should return false given null', () => {
		expect(isNonEmptyObject(null)).toBe(false);
	});
});
