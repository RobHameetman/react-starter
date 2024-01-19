import { isSearchable } from './isSearchable';
import { TableState } from '../../../types';
import { fakeSearchableTable, fakeNonSearchableTable } from './__test__';

describe('isSearchable()', (): void => {
	let state: TableState | null = null;
	let result: boolean | null = null;

	describe('when the table is searchable', (): void => {
		beforeEach((): void => {
			state = fakeSearchableTable();
			result = isSearchable(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return true', (): void => {
			expect(result).toBe(true);
		});
	});

	describe('when the table is not searchable', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeNonSearchableTable();
			result = isSearchable(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return false', (): void => {
			expect(result).toBe(false);
		});
	});
});
