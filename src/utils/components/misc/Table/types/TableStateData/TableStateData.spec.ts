import { isTableStateData } from './TableStateData';
import { fakeTableStateData } from './__test__';

describe('isTableStateData()', () => {
	it('should return true given a valid TableStateData', () => {
		expect(isTableStateData(fakeTableStateData())).toBe(true);
	});

	it('should return false given an invalid TableStateData', () => {
		expect(isTableStateData(fakeTableStateData({ maxRows: 0 }))).toBe(false);
	});
});
