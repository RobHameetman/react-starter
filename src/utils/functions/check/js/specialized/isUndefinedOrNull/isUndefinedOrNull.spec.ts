import { isUndefinedOrNull } from './isUndefinedOrNull';

describe('isUndefinedOrNull()', () => {
	it('should return true given `undefined`', () => {
		expect(isUndefinedOrNull(undefined)).toBe(true);
	});

	it('should return true given `null`', () => {
		expect(isUndefinedOrNull(null)).toBe(true);
	});

	it('should return false given an empty array', () => {
		expect(isUndefinedOrNull([])).toBe(false);
	});

	it('should return false given an empty object', () => {
		expect(isUndefinedOrNull({})).toBe(false);
	});

	it('should return false given an empty string', () => {
		expect(isUndefinedOrNull('')).toBe(false);
	});
});
