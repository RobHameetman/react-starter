import { clearBuffer } from './clearBuffer';
import { TableState, isTableState } from '../../../types';
import { fakeTableWithBuffer, fakeTableWithNoBuffer } from './__test__';

describe('clearBuffer()', () => {
	let result: TableState | null = null;

	describe('when the table is buffering', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeTableWithBuffer();
			result = clearBuffer(state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should reset the buffer to null', () => {
			expect(result?.data.buffer).toBeNull();
		});

		it('should move the buffer data to dispayed data', () => {
			expect(result?.data.displayedData).toHaveLength(
				((state ?? {}).data?.buffer ?? []).length,
			);
		});
	});

	describe('when the table is not buffering', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeTableWithNoBuffer();
			result = clearBuffer(state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not reset the buffer to null', () => {
			expect(result === state).toBe(true);
		});

		it('should not move the buffer data to dispayed data', () => {
			expect(result?.data.displayedData).toHaveLength(0);
		});
	});
});
