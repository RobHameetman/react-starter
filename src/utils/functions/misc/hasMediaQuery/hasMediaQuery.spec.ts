import { hasMediaQuery } from './hasMediaQuery';
import {
	getMatchingMediaQuery,
	getNonMatchingMediaQuery,
	whenWindowIsUndefined,
} from './__test__';

describe('hasMediaQuery()', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('should return true given a matching media query', () => {
		expect(hasMediaQuery(getMatchingMediaQuery())).toBe(true);
	});

	it('should return false given a non-matching media query', () => {
		expect(hasMediaQuery(getNonMatchingMediaQuery())).toBe(false);
	});

	it('should return false when not in the browser', () => {
		expect(hasMediaQuery(whenWindowIsUndefined())).toBe(false);
	});
});
