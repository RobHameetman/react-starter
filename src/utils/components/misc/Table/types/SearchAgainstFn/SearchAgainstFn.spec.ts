import { isSearchAgainstFn } from './SearchAgainstFn';

describe('isSearchAgainstFn', () => {
	it('should return true given a valid SearchAgainstFn', () => {
		expect(isSearchAgainstFn(() => '')).toBe(true);
	});

	it('should return false given an invalid SearchAgainstFn', () => {
		expect(isSearchAgainstFn(() => null)).toBe(false);
	});
});
