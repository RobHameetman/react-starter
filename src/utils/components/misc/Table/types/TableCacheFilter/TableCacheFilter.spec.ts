import { isTableCacheFilter } from './TableCacheFilter';
import { fakeTableCacheFilter } from './__test__';

describe('isTableCacheFilter()', () => {
	it('should return true given a valid TableCacheFilter', () => {
		expect(isTableCacheFilter(fakeTableCacheFilter())).toBe(true);
	});

	it('should return false given an invalid TableCacheFilter', () => {
		expect(isTableCacheFilter(fakeTableCacheFilter({ searchBy: null }))).toBe(
			false,
		);
	});
});
