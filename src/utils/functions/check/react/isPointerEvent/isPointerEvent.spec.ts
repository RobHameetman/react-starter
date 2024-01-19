import { isPointerEvent } from './isPointerEvent';
import { fakePointerEvent } from './__test__';

describe('isPointerEvent()', () => {
	it('should return true given a valid PointerEvent', () => {
		expect(isPointerEvent(fakePointerEvent())).toBe(true);
	});

	it('should return false given an invalid PointerEvent', () => {
		expect(isPointerEvent(fakePointerEvent({ type: 'mouseup' }))).toBe(false);
	});
});
