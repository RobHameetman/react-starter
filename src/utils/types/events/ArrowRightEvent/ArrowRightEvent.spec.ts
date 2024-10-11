import { isArrowRightEvent } from './ArrowRightEvent';
import { fakeArrowRightEvent } from './__test__';

describe('isArrowRightEvent()', () => {
	it('should return true given a valid ArrowRightEvent', () => {
		expect(isArrowRightEvent(fakeArrowRightEvent())).toBe(true);
	});

	it('should return false given an invalid ArrowRightEvent', () => {
		expect(isArrowRightEvent(fakeArrowRightEvent({ code: 'Space' }))).toBe(false);
	});
});
