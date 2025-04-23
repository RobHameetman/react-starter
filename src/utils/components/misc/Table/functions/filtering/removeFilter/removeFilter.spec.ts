import { removeFilter } from './removeFilter';
import { TableState, isTableState } from '../../../types';
import {
	fakeFilterableTableWithFilters,
	fakeNonFilterableTableWithFilters,
} from './__test__/';

describe('removeFilter()', () => {
	let result: TableState | null = null;

	describe('when the table is filterable', () => {
		let state: TableState | null = null;
		let filter: string = '';

		beforeEach(() => {
			state = fakeFilterableTableWithFilters();
			filter = state?.filter.filterBy[0];

			result = removeFilter(filter, state as TableState);
		});

		afterEach(() => {
			state = null;
			filter = '';
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should remove the filter from the table state', () => {
			expect(result?.filter?.filterBy.includes(filter)).toBe(false);
		});
	});

	describe('when the table is not filterable', () => {
		let state: TableState | null = null;
		let filter: string = '';

		beforeEach(() => {
			state = fakeNonFilterableTableWithFilters();
			filter = state?.filter.filterBy[0];

			result = removeFilter(filter, state);
		});

		afterEach(() => {
			state = null;
			filter = '';
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not remove the filter from the table state', () => {
			expect(result === state).toBe(true);
		});
	});
});
