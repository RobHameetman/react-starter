import { isVirtual } from './isVirtual';
import { TableState } from '../../../types';
import { fakeVirtualTable, fakeNonVirtualTable } from './__test__';

describe('isVirtual()', (): void => {
	let state: TableState | null = null;
	let result: boolean | null = null;

	describe('when the table is virtual', (): void => {
		beforeEach((): void => {
			state = fakeVirtualTable();
			result = isVirtual(state);
		});

		afterEach((): void => {
			state = null;
			result = null;
		});

		it('should return true', (): void => {
			expect(result).toBe(true);
		});
	});

	describe('when the table is not virtual', (): void => {
		let state: TableState | null = null;

		beforeEach((): void => {
			state = fakeNonVirtualTable();
			result = isVirtual(state);
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
