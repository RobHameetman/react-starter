import { TableState, isTableState } from '../../../types';
import { fakeLoadingTable, fakeNotLoadingTable } from '../isLoading/__test__';
import { startLoading } from './startLoading';

describe('startLoading()', () => {
	let result: TableState | null = null;

	describe('when the table is not loading', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeNotLoadingTable();
			result = startLoading(state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should start loading', () => {
			expect(result?.loading).toBe(true);
		});
	});

	describe('when the table is loading', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeLoadingTable();
			result = startLoading(state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not start loading', () => {
			expect(result === state).toBe(true);
		});
	});
});
