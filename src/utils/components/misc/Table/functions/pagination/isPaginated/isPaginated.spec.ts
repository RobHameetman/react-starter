import { isPaginated } from './isPaginated';
import { TableState } from '../../../types';
import { fakePaginatedTable, fakeNonPaginatedTable } from './__test__';

describe('isPaginated()', (): void => {
	let state: TableState | null = null;
	let result: boolean | null = null;

	describe('when the table is paginated', (): void => {
		beforeEach((): void => {
			state = fakePaginatedTable();
			result = isPaginated(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return true', (): void => {
			expect(result).toBe(true);
		});
	});

	describe('when the table is not paginated', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeNonPaginatedTable();
			result = isPaginated(state);
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
