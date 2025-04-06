import { GridContext, isGridContext } from './GridContext';
import { fakeGridContext } from './__test__';

describe('isGridContext()', () => {
	it('should return true given a valid GridContext', () => {
		expect(isGridContext(fakeGridContext())).toBe(true);
	});

	it('should return false given an invalid GridContext', () => {
		expect(isGridContext(fakeGridContext({ theme: undefined }))).toBe(false);
	});
});
