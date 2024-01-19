import { isKeyboardEvent } from './isKeyboardEvent';
import { fakeKeyboardEvent } from './__test__';

describe('isKeyboardEvent()', () => {
	it('should return true given a valid KeyboardEvent', () => {
		expect(isKeyboardEvent(fakeKeyboardEvent())).toBe(true);
	});

	it('should return false given an invalid KeyboardEvent', () => {
		expect(isKeyboardEvent(fakeKeyboardEvent({ type: 'drag' }))).toBe(false);
	});
});
