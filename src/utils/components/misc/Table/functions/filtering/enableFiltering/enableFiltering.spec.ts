import { enableFiltering } from './enableFiltering';
import { isFilterable } from '../isFilterable';
import { TableState, isTableState } from '../../../types';
import {
	fakeFilterableTable,
	fakeNonFilterableTable,
} from '../isFilterable/__test__';

describe('enableFiltering()', () => {
	let result: TableState | null = null;

	describe('when the table is not filterable', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeNonFilterableTable();
			result = enableFiltering(state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should enable filtering', () => {
			expect(isFilterable(result as TableState)).toBe(true);
		});
	});

	describe('when the table is filterable', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeFilterableTable();
			result = enableFiltering(state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not enable filtering', () => {
			expect(result === state).toBe(true);
		});
	});
});
