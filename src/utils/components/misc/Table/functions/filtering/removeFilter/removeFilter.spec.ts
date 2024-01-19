import { removeFilter } from './removeFilter';
import { TableState, isTableState } from '../../../types';
import {
	fakeFilterableTableWithFilters,
	fakeNonFilterableTableWithFilters,
} from './__test__/';

describe('removeFilter()', (): void => {
	let result: TableState | null = null;

	describe('when the table is filterable', (): void => {
		let state: TableState | null = null;
		let filter: string = '';

		beforeEach((): void => {
			state = fakeFilterableTableWithFilters();
			filter = state?.filter.filterBy[0];

			result = removeFilter(filter, state as TableState);
		});

		afterEach((): void => {
			state = null;
			filter = '';
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should remove the filter from the table state', (): void => {
			expect(result?.filter?.filterBy.includes(filter)).toBe(false);
		});
	});

	describe('when the table is not filterable', (): void => {
		let state: TableState | null = null;
		let filter: string = '';

		beforeEach((): void => {
			state = fakeNonFilterableTableWithFilters();
			filter = state?.filter.filterBy[0];

			result = removeFilter(filter, state);
		});

		afterEach((): void => {
			state = null;
			filter = '';
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not remove the filter from the table state', (): void => {
			expect(result === state).toBe(true);
		});
	});
});
