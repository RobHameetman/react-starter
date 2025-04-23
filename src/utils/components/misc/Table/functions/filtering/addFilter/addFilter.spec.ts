import { addFilter } from './addFilter';
import { TableState, isTableState } from '../../../types';
import {
	fakeFilterableTableWithNoFilters,
	fakeNonFilterableTableWithNoFilters,
} from './__test__';

describe('addFilter()', () => {
	let result: TableState | null = null;
	let filter = '';

	beforeEach(() => {
		filter = 'newFilter';
	});

	afterEach(() => {
		filter = '';
	});

	describe('when the table is filterable', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeFilterableTableWithNoFilters();
			result = addFilter(filter, state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should add the filter to the table state', () => {
			expect(result?.filter?.filterBy.includes(filter)).toBe(true);
		});
	});

	describe('when the table is not filterable', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeNonFilterableTableWithNoFilters();
			result = addFilter(filter, state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not add the filter to the table state', () => {
			expect(result === state).toBe(true);
		});
	});
});
