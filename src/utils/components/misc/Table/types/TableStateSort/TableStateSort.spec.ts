import { isTableStateSort } from './TableStateSort';
import { fakeTableStateSort } from './__test__';

describe('isTableStateSort()', () => {
	it('should return true given a valid TableStateSort', () => {
		expect(isTableStateSort(fakeTableStateSort())).toBe(true);
	});

	it('should return false given an invalid TableStateSort', () => {
		expect(isTableStateSort(fakeTableStateSort({ options: null }))).toBe(false);
	});
});
