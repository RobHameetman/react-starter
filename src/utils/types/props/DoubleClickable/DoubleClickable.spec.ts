import { isDoubleClickable } from './DoubleClickable';
import { fakeDoubleClickable } from './__test__';

describe('isDoubleClickable()', () => {
	it('should return true for a valid set of DoubleClickable props', () => {
		expect(isDoubleClickable(fakeDoubleClickable())).toBe(true);
	});

	it('should return false for an invalid set of DoubleClickable props', () => {
		expect(
			isDoubleClickable(fakeDoubleClickable({ onDoubleClick: null })),
		).toBe(false);
	});
});
