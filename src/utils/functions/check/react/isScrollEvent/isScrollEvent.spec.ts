import { isScrollEvent } from './isScrollEvent';
import { fakeScrollEvent } from './__test__';

describe('isScrollEvent()', () => {
	it('should return true given a valid ScrollEvent', () => {
		expect(isScrollEvent(fakeScrollEvent())).toBe(true);
	});

	it('should return false given an invalid ScrollEvent', () => {
		expect(isScrollEvent(fakeScrollEvent({ type: 'mouseout' }))).toBe(false);
	});
});
