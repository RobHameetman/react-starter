import { isMouseEvent } from './isMouseEvent';
import { fakeMouseEvent } from './__test__';

const strict = true;

describe('isMouseEvent()', () => {
	it('should return true given a valid MouseEvent', () => {
		expect(isMouseEvent(fakeMouseEvent(), strict)).toBe(true);
	});

	it('should return true given a valid MouseEvent with a pointer event type when strict mode is off', () => {
		expect(isMouseEvent(fakeMouseEvent({ type: 'pointerup' }))).toBe(true);
	});

	it('should return false given an invalid MouseEvent', () => {
		expect(isMouseEvent(fakeMouseEvent({ type: 'pointerup' }), strict)).toBe(
			false,
		);
	});
});
