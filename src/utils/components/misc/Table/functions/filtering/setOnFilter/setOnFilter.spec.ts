import { setOnFilter } from './setOnFilter';
import { TableState, isTableState } from '../../../types';
import {
	fakeFilterableTable,
	fakeNonFilterableTable,
} from '../isFilterable/__test__';

describe('setOnFilter()', () => {
	let onFilter = jest.fn();
	let result: TableState | null = null;

	describe('when the table is filterable', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeFilterableTable();
			result = setOnFilter(onFilter, state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should set the onFilter function', () => {
			expect(result?.filter?.onFilter).toEqual(onFilter);
		});
	});

	describe('when the table is not filterable', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeNonFilterableTable();
			result = setOnFilter(onFilter, state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not set the onFilter function', () => {
			expect(result === state).toBe(true);
		});
	});
});
