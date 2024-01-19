import { isTouchEvent } from './isTouchEvent';
import { fakeTouchEvent } from './__test__';

describe('isTouchEvent()', () => {
	it('should return true given a valid TouchEvent', () => {
		expect(isTouchEvent(fakeTouchEvent())).toBe(true);
	});

	it('should return false given an invalid TouchEvent', () => {
		expect(isTouchEvent(fakeTouchEvent({ type: 'pointerup' }))).toBe(false);
	});
});
