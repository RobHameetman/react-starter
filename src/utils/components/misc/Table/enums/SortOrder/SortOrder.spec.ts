import { isSortOrder } from './SortOrder';

describe('isSortOrder', () => {
	it("should return true given the string value 'asc'", () => {
		expect(isSortOrder('asc')).toBe(true);
	});

	it("should return true given the string value 'desc'", () => {
		expect(isSortOrder('desc')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isSortOrder('')).toBe(false);
	});
});
