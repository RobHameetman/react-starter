import { isArrowUpEvent } from './ArrowUpEvent';
import { fakeArrowUpEvent } from './__test__';

describe('isArrowUpEvent()', () => {
	it('should return true given a valid ArrowUpEvent', () => {
		expect(isArrowUpEvent(fakeArrowUpEvent())).toBe(true);
	});

	it('should return false given an invalid ArrowUpEvent', () => {
		expect(isArrowUpEvent(fakeArrowUpEvent({ code: 'Space' }))).toBe(false);
	});
});
