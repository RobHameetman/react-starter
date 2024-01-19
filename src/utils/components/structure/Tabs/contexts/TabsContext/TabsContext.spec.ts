import { isTabsContext } from './TabsContext';
import { fakeTabsContext } from './__test__';

describe('isTabsContext()', () => {
	it('should return true given a valid TabsContext', () => {
		expect(isTabsContext(fakeTabsContext())).toBe(true);
	});

	it('should return false given an invalid TabsContext', () => {
		expect(isTabsContext(fakeTabsContext({ currentTabName: null }))).toBe(
			false,
		);
	});
});
