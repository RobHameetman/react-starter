import { resetFilters } from './resetFilters';
import { TableState, isTableState } from '../../../types';
import {
	fakeFilterableTableWithFilters,
	fakeNonFilterableTableWithFilters,
} from '../removeFilter/__test__/';

describe('resetFilters()', () => {
	let result: TableState | null = null;

	describe('when the table is filterable', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeFilterableTableWithFilters();
			result = resetFilters(state as TableState);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should reset the filters in the table state', () => {
			expect(result?.filter?.filterBy).toHaveLength(0);
		});
	});

	describe('when the table is not filterable', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeNonFilterableTableWithFilters();
			result = resetFilters(state as TableState);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not reset the filters in the table state', () => {
			expect(result === state).toBe(true);
		});
	});
});
