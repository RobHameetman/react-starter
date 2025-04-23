import { initializeBuffer } from './initializeBuffer';
import { TableState, isTableState } from '../../../types';
import {
	fakeTableWithBuffer,
	fakeTableWithNoBuffer,
} from '../clearBuffer/__test__';

describe('initializeBuffer()', () => {
	let result: TableState | null = null;

	describe('when the table is not buffering', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeTableWithNoBuffer();
			result = initializeBuffer(state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should set the buffer to the initial data', () => {
			expect(result?.data.buffer).toHaveLength(
				result?.data?.initialData.length || 0,
			);
		});
	});

	describe('when the table is buffering', () => {
		let state: TableState | null = null;

		beforeEach(() => {
			state = fakeTableWithBuffer();
			result = initializeBuffer(state);
		});

		afterEach(() => {
			state = null;
			result = null;
		});

		it('should return a valid TableState', () => {
			expect(isTableState(result)).toBe(true);
		});

		it('should not set the buffer to the initial data', () => {
			expect(result === state).toBe(true);
		});
	});
});
