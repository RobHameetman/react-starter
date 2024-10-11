import { isArrowDownEvent } from './ArrowDownEvent';
import { fakeArrowDownEvent } from './__test__';

describe('isArrowDownEvent()', () => {
	it('should return true given a valid ArrowDownEvent', () => {
		expect(isArrowDownEvent(fakeArrowDownEvent())).toBe(true);
	});

	it('should return false given an invalid ArrowDownEvent', () => {
		expect(isArrowDownEvent(fakeArrowDownEvent({ code: 'Space' }))).toBe(false);
	});
});
