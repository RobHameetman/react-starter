import { isArrowKeyEvent } from './ArrowKeyEvent';
import { fakeArrowKeyEvent } from './__test__';

describe('isArrowKeyEvent()', () => {
	it('should return true given a valid ArrowKeyEvent', () => {
		expect(isArrowKeyEvent(fakeArrowKeyEvent())).toBe(true);
	});

	it('should return false given an invalid ArrowKeyEvent', () => {
		expect(isArrowKeyEvent(fakeArrowKeyEvent({ code: 'Space' }))).toBe(false);
	});
});
