import { isTouchable } from './Touchable';
import { fakeTouchable } from './__test__';

describe('isTouchable()', () => {
	it('should return true for a valid set of Touchable props', () => {
		expect(isTouchable(fakeTouchable())).toBe(true);
	});

	it('should return false for an invalid set of Touchable props', () => {
		expect(isTouchable(fakeTouchable({ onTouchStart: null }))).toBe(false);
	});
});
