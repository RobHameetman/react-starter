import { isSearchable } from './isSearchable';
import { fakeSearchableTable, fakeNonSearchableTable } from './__test__';

describe('isSearchable()', () => {
	it('should return true when the table is searchable', () => {
		expect(isSearchable(fakeSearchableTable())).toBe(true);
	});

	it('should return false when the table is not searchable', () => {
		expect(isSearchable(fakeNonSearchableTable())).toBe(false);
	});
});
