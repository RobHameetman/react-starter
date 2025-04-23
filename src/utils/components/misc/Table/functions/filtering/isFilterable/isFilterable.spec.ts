import { isFilterable } from './isFilterable';
import { fakeFilterableTable, fakeNonFilterableTable } from './__test__';

describe('isFilterable()', () => {
	it('should return true when the table is filterable', () => {
		expect(isFilterable(fakeFilterableTable())).toBe(true);
	});

	it('should return false when the table is not filterable', () => {
		expect(isFilterable(fakeNonFilterableTable())).toBe(false);
	});
});
