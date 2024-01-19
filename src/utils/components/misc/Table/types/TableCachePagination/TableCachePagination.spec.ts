import { isTableCachePagination } from './TableCachePagination';
import { fakeTableCachePagination } from './__test__';

describe('isTableCachePagination()', () => {
	it('should return true given a valid TableCachePagination', () => {
		expect(isTableCachePagination(fakeTableCachePagination())).toBe(true);
	});

	it('should return false given an invalid TableCachePagination', () => {
		expect(
			isTableCachePagination(fakeTableCachePagination({ currentPage: -1 })),
		).toBe(false);
	});
});
