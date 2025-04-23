import { PageContext, isPageContext } from './PageContext';
import { fakePageContext } from './__test__';

describe('isPageContext()', () => {
	it('should return true given a valid PageContext', () => {
		expect(isPageContext(fakePageContext())).toBe(true);
	});

	it('should return false given an invalid PageContext', () => {
		expect(isPageContext(fakePageContext({ theme: undefined }))).toBe(false);
	});
});
