import { setOnFilter } from './setOnFilter';
import { TableState, isTableState } from '../../../types';
import {
	fakeFilterableTable,
	fakeNonFilterableTable,
} from '../isFilterable/__test__';

describe('setOnFilter()', (): void => {
	let onFilter = jest.fn();
	let result: TableState | null = null;

	describe('when the table is filterable', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeFilterableTable();
			result = setOnFilter(onFilter, state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should set the onFilter function', (): void => {
			expect(result?.filter?.onFilter).toEqual(onFilter);
		});
	});

	describe('when the table is not filterable', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeNonFilterableTable();
			result = setOnFilter(onFilter, state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not set the onFilter function', (): void => {
			expect(result === state).toBe(true);
		});
	});
});
