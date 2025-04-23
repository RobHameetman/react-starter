import { MenuContext, isMenuContext } from './MenuContext';
import { fakeMenuContext } from './__test__';

describe('isMenuContext()', () => {
	it('should return true given a valid MenuContext', () => {
		expect(isMenuContext(fakeMenuContext())).toBe(true);
	});

	it('should return false given an invalid MenuContext', () => {
		expect(isMenuContext(fakeMenuContext({ theme: undefined }))).toBe(false);
	});
});
