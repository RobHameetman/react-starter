import { startLoading } from './startLoading';
import { TableState, isTableState } from '../../../types';
import { fakeLoadingTable, fakeNotLoadingTable } from '../isLoading/__test__';

describe('startLoading()', (): void => {
	let result: TableState | null = null;

	describe('when the table is not loading', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeNotLoadingTable();
			result = startLoading(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should start loading', (): void => {
			expect(result?.loading).toBe(true);
		});
	});

	describe('when the table is loading', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeLoadingTable();
			result = startLoading(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not start loading', (): void => {
			expect(result === state).toBe(true);
		});
	});
});
