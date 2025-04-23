import { enableSearching } from './enableSearching';
import { isSearchable } from '../isSearchable';
import { TableState, isTableState } from '../../../types';
import {
	fakeSearchableTable,
	fakeNonSearchableTable,
} from '../isSearchable/__test__';

describe('enableSearching()', () => {
	let result: TableState | null = null;

	describe('when the table is not searchable', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeNonSearchableTable();
			result = enableSearching(state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should enable searching', () => {
			expect(isSearchable(result as TableState)).toBe(true);
		});
	});

	describe('when the table is searchable', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeSearchableTable();
			result = enableSearching(state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not enable searching', () => {
			expect(result === state).toBe(true);
		});
	});
});
