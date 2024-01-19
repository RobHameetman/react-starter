import { enableSearching } from './enableSearching';
import { isSearchable } from '../isSearchable';
import { TableState, isTableState } from '../../../types';
import {
	fakeSearchableTable,
	fakeNonSearchableTable,
} from '../isSearchable/__test__';

describe('enableSearching()', (): void => {
	let result: TableState | null = null;

	describe('when the table is not searchable', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeNonSearchableTable();
			result = enableSearching(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should enable searching', (): void => {
			expect(isSearchable(result as TableState)).toBe(true);
		});
	});

	describe('when the table is searchable', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeSearchableTable();
			result = enableSearching(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not enable searching', (): void => {
			expect(result === state).toBe(true);
		});
	});
});
