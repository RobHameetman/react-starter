import { isTableState } from './TableState';
import { fakeTableState } from './__test__';

describe('isTableState()', () => {
	it('should return true given a valid TableState', () => {
		expect(isTableState(fakeTableState())).toBe(true);
	});

	it('should return false given an invalid TableState', () => {
		expect(isTableState(fakeTableState({ columns: 0 }))).toBe(false);
	});
});
