import { isSortOption } from './SortOption';
import { fakeSortOption } from './__test__';

describe('isSortOption()', () => {
	it('should return true given a valid SortOption', () => {
		expect(isSortOption(fakeSortOption())).toBe(true);
	});

	it('should return false given an invalid SortOption', () => {
		expect(isSortOption(fakeSortOption({ sortBy: null }))).toBe(false);
	});
});
