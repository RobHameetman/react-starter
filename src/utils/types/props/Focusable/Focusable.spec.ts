import { isFocusable } from './Focusable';
import { fakeFocusable } from './__test__';

describe('isFocusable()', () => {
	it('should return true for a valid set of Focusable props', () => {
		expect(isFocusable(fakeFocusable())).toBe(true);
	});

	it('should return false for an invalid set of Focusable props', () => {
		expect(isFocusable(fakeFocusable({ onFocus: null }))).toBe(false);
	});
});
