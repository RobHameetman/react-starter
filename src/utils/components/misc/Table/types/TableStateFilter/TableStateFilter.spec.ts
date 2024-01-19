import { isTableStateFilter } from './TableStateFilter';
import { fakeTableStateFilter } from './__test__';

describe('isTableStateFilter()', () => {
	it('should return true given a valid TableStateFilter', () => {
		expect(isTableStateFilter(fakeTableStateFilter())).toBe(true);
	});

	it('should return false given an invalid TableStateFilter', () => {
		expect(
			isTableStateFilter(fakeTableStateFilter({ virtual: undefined })),
		).toBe(false);
	});
});
