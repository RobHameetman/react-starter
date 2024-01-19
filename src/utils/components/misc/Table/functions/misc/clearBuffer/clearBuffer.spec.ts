import { clearBuffer } from './clearBuffer';
import { TableState, isTableState } from '../../../types';
import { fakeTableWithBuffer, fakeTableWithNoBuffer } from './__test__';

describe('clearBuffer()', (): void => {
	let result: TableState | null = null;

	describe('when the table is buffering', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeTableWithBuffer();
			result = clearBuffer(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should reset the buffer to null', (): void => {
			expect(result?.data.buffer).toBeNull();
		});

		it('should move the buffer data to dispayed data', (): void => {
			expect(result?.data.displayedData).toHaveLength(
				((state ?? {}).data?.buffer ?? []).length,
			);
		});
	});

	describe('when the table is not buffering', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeTableWithNoBuffer();
			result = clearBuffer(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not reset the buffer to null', (): void => {
			expect(result === state).toBe(true);
		});

		it('should not move the buffer data to dispayed data', (): void => {
			expect(result?.data.displayedData).toHaveLength(0);
		});
	});
});
