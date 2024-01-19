import { isCloseEvent } from './Link';
import { fakeCloseEvent } from './__test__';

describe('isCloseEvent()', () => {
	it('should return true given a valid CloseEvent', () => {
		expect(isCloseEvent(fakeCloseEvent())).toBe(true);
	});

	it('should return false given an invalid CloseEvent', () => {
		expect(isCloseEvent(fakeCloseEvent({ type: 'drag' }))).toBe(false);
	});
});
