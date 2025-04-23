import { isVirtual } from './isVirtual';
import { fakeVirtualTable, fakeNonVirtualTable } from './__test__';

describe('isVirtual()', () => {
	it('should return true when the table is virtual', () => {
		expect(isVirtual(fakeVirtualTable())).toBe(true);
	});

	it('should return false when the table is not virtual', () => {
		expect(isVirtual(fakeNonVirtualTable())).toBe(false);
	});
});
