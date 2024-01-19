import { enableFiltering } from './enableFiltering';
import { isFilterable } from '../isFilterable';
import { TableState, isTableState } from '../../../types';
import {
	fakeFilterableTable,
	fakeNonFilterableTable,
} from '../isFilterable/__test__';

describe('enableFiltering()', (): void => {
	let result: TableState | null = null;

	describe('when the table is not filterable', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeNonFilterableTable();
			result = enableFiltering(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should enable filtering', (): void => {
			expect(isFilterable(result as TableState)).toBe(true);
		});
	});

	describe('when the table is filterable', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeFilterableTable();
			result = enableFiltering(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not enable filtering', (): void => {
			expect(result === state).toBe(true);
		});
	});
});
