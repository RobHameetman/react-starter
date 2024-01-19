import { isSearchAgainstFn } from '../../types';
import { DEFAULT_SEARCH_AGAINST } from './DEFAULT_SEARCH_AGAINST';

describe('DEFAULT_SEARCH_AGAINST', () => {
	it('should be a valid SearchAgainstFn', () => {
		expect(isSearchAgainstFn(DEFAULT_SEARCH_AGAINST)).toBe(true);
	});
});
