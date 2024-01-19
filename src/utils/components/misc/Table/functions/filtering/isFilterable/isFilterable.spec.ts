import { isFilterable } from './isFilterable';
import { TableState } from '../../../types';
import { fakeFilterableTable, fakeNonFilterableTable } from './__test__';

describe('isFilterable()', (): void => {
	let state: TableState | null = null;
	let result: boolean | null = null;

	describe('when the table is filterable', (): void => {
		beforeEach((): void => {
			state = fakeFilterableTable();
			result = isFilterable(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return true', (): void => {
			expect(result).toBe(true);
		});
	});

	describe('when the table is not filterable', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeNonFilterableTable();
			result = isFilterable(state);
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
