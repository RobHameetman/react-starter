import { stopLoading } from './stopLoading';
import { TableState, isTableState } from '../../../types';
import { fakeLoadingTable, fakeNotLoadingTable } from '../isLoading/__test__';

describe('stopLoading()', (): void => {
	let result: TableState | null = null;

	describe('when the table is loading', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeLoadingTable();
			result = stopLoading(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should stop loading', (): void => {
			expect(result?.loading).toBe(false);
		});
	});

	describe('when the table is not loading', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeNotLoadingTable();
			result = stopLoading(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not stop loading', (): void => {
			expect(result === state).toBe(true);
		});
	});
});
