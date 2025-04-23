import { isLoading } from './isLoading';
import { fakeNotLoadingTable } from './__test__';

describe('isLoading()', () => {
	it('should return true when the table is loading', () => {
		expect(isLoading(fakeNotLoadingTable())).toBe(true);
	});

	it('should return false when the table is not loading', () => {
		expect(isLoading(fakeNotLoadingTable())).toBe(false);
	});
});
