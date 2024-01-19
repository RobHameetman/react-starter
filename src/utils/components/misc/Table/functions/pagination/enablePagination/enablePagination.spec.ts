import { enablePagination } from './enablePagination';
import { isPaginated } from '../isPaginated';
import { TableState, isTableState } from '../../../types';
import {
	fakePaginatedTable,
	fakeNonPaginatedTable,
} from '../isPaginated/__test__';

describe('enablePagination()', (): void => {
	let result: TableState | null = null;

	describe('when the table is not paginated', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeNonPaginatedTable();
			result = enablePagination(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should enable pagination', (): void => {
			expect(isPaginated(result as TableState)).toBe(true);
		});
	});

	describe('when the table is paginated', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakePaginatedTable();
			result = enablePagination(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not enable pagination', (): void => {
			expect(result === state).toBe(true);
		});
	});
});
