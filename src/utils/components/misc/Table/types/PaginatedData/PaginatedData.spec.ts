import { isPaginatedData } from './PaginatedData';
import { fakePaginatedData } from './__test__';

describe('isPaginatedData()', () => {
	it('should return true given valid PaginatedData', () => {
		expect(isPaginatedData(fakePaginatedData())).toBe(true);
	});

	it('should return false given invalid PaginatedData', () => {
		expect(isPaginatedData({ page1: [], page2: [] })).toBe(false);
	});
});
