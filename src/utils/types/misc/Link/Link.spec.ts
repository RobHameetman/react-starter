import { isLink } from './Link';
import { fakeLink } from './__test__';

describe('isLink()', () => {
	it('should return true given a valid CloseEvent', () => {
		expect(isLink(fakeLink())).toBe(true);
	});

	it('should return false given an invalid CloseEvent', () => {
		expect(isLink(fakeLink({ type: 'drag' }))).toBe(false);
	});
});
