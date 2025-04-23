import { isMovable } from './Movable';
import { fakeKeyboardable } from './__test__';

describe('isMovable()', () => {
	it('should return true for a valid set of Keyboardable props', () => {
		expect(isMovable(fakeKeyboardable())).toBe(true);
	});

	it('should return false for an invalid set of Keyboardable props', () => {
		expect(isMovable(fakeKeyboardable({ onKeyDown: null }))).toBe(false);
	});
});
