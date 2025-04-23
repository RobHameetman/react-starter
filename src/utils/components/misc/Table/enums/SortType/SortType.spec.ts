import { isSortType } from './SortType';

describe('isSortType', () => {
	it("should return true given the string value 'DATE'", () => {
		expect(isSortType('DATE')).toBe(true);
	});

	it("should return true given the string value 'QUANTITY'", () => {
		expect(isSortType('QUANTITY')).toBe(true);
	});

	it('should return true given an empty string', () => {
		expect(isSortType('')).toBe(true);
	});
});
