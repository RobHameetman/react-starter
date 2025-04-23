import { isPaginated } from './isPaginated';
import { fakePaginatedTable, fakeNonPaginatedTable } from './__test__';

describe('isPaginated()', () => {
	it('should return true when the table is virtual', () => {
		expect(isPaginated(fakePaginatedTable())).toBe(true);
	});

	it('should return false when the table is not virtual', () => {
		expect(isPaginated(fakeNonPaginatedTable())).toBe(false);
	});
});
