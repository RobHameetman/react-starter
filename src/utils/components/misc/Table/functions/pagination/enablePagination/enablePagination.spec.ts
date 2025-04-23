import { enablePagination } from './enablePagination';
import { isPaginated } from '../isPaginated';
import { TableState, isTableState } from '../../../types';
import {
	fakePaginatedTable,
	fakeNonPaginatedTable,
} from '../isPaginated/__test__';

describe('enablePagination()', () => {
	let result: TableState | null = null;

	describe('when the table is not paginated', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeNonPaginatedTable();
			result = enablePagination(state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should enable pagination', () => {
			expect(isPaginated(result as TableState)).toBe(true);
		});
	});

	describe('when the table is paginated', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakePaginatedTable();
			result = enablePagination(state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not enable pagination', () => {
			expect(result === state).toBe(true);
		});
	});
});
