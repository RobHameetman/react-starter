import { isLoading } from './isLoading';
import { TableState } from '../../../types';
import { fakeLoadingTable, fakeNotLoadingTable } from './__test__';

describe('isLoading()', (): void => {
	let result: boolean | null = null;

	describe('when the table is loading', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeLoadingTable();
			result = isLoading(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return true', (): void => {
			expect(result).toBe(true);
		});
	});

	describe('when the table is not loading', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeNotLoadingTable();
			result = isLoading(state);
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
