import { TableState, isTableState } from '../../../types';
import { fakeLoadingTable, fakeNotLoadingTable } from '../isLoading/__test__';
import { stopLoading } from './stopLoading';

describe('stopLoading()', () => {
	let result: TableState | null = null;

	describe('when the table is loading', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeLoadingTable();
			result = stopLoading(state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should stop loading', () => {
			expect(result?.loading).toBe(false);
		});
	});

	describe('when the table is not loading', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeNotLoadingTable();
			result = stopLoading(state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not stop loading', () => {
			expect(result === state).toBe(true);
		});
	});
});
