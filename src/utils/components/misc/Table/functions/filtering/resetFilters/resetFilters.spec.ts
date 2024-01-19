import { resetFilters } from './resetFilters';
import { TableState, isTableState } from '../../../types';
import {
	fakeFilterableTableWithFilters,
	fakeNonFilterableTableWithFilters,
} from '../removeFilter/__test__/';

describe('resetFilters()', (): void => {
	let result: TableState | null = null;

	describe('when the table is filterable', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeFilterableTableWithFilters();
			result = resetFilters(state as TableState);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should reset the filters in the table state', (): void => {
			expect(result?.filter?.filterBy).toHaveLength(0);
		});
	});

	describe('when the table is not filterable', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeNonFilterableTableWithFilters();
			result = resetFilters(state as TableState);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not reset the filters in the table state', (): void => {
			expect(result === state).toBe(true);
		});
	});
});
