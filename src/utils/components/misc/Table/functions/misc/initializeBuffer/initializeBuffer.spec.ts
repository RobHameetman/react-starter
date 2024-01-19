import { initializeBuffer } from './initializeBuffer';
import { TableState, isTableState } from '../../../types';
import {
	fakeTableWithBuffer,
	fakeTableWithNoBuffer,
} from '../clearBuffer/__test__';

describe('initializeBuffer()', (): void => {
	let result: TableState | null = null;

	describe('when the table is not buffering', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeTableWithNoBuffer();
			result = initializeBuffer(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should set the buffer to the initial data', (): void => {
			expect(result?.data.buffer).toHaveLength(
				result?.data?.initialData.length || 0,
			);
		});
	});

	describe('when the table is buffering', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeTableWithBuffer();
			result = initializeBuffer(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', (): void => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not set the buffer to the initial data', (): void => {
			expect(result === state).toBe(true);
		});
	});
});
