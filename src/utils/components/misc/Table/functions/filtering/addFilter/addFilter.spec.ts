import { addFilter } from './addFilter';
import { TableState, isTableState } from '../../../types';
import {
	fakeFilterableTableWithNoFilters,
	fakeNonFilterableTableWithNoFilters,
} from './__test__';

describe('addFilter()', (): void => {
	let result: TableState | null = null;
	let filter = '';

	beforeEach((): void => {
		filter = 'newFilter';
	});

	afterEach((): void => {
		filter = '';
	});

	describe('when the table is filterable', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeFilterableTableWithNoFilters();
			result = addFilter(filter, state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should add the filter to the table state', (): void => {
			expect(result?.filter?.filterBy.includes(filter)).toBe(true);
		});
	});

	describe('when the table is not filterable', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeNonFilterableTableWithNoFilters();
			result = addFilter(filter, state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not add the filter to the table state', (): void => {
			expect(result === state).toBe(true);
		});
	});
});
