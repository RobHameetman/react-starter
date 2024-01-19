import { isTableCacheSort } from './TableCacheSort';
import { fakeTableCacheSort } from './__test__';

describe('isTableCacheSort()', () => {
	it('should return true given a valid TableCacheSort', () => {
		expect(isTableCacheSort(fakeTableCacheSort())).toBe(true);
	});

	it('should return false given an invalid TableCacheSort', () => {
		expect(isTableCacheSort(fakeTableCacheSort({ active: null }))).toBe(false);
	});
});
