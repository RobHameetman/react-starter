import { isKeyboardable } from './Keyboardable';
import { fakeKeyboardable } from './__test__';

describe('isKeyboardable()', () => {
	it('should return true for a valid set of Keyboardable props', () => {
		expect(isKeyboardable(fakeKeyboardable())).toBe(true);
	});

	it('should return false for an invalid set of Keyboardable props', () => {
		expect(isKeyboardable(fakeKeyboardable({ onKeyDown: null }))).toBe(false);
	});
});
