import { isClickable } from './Clickable';
import { fakeClickable } from './__test__';

describe('isClickable()', () => {
	it('should return true for a valid set of Clickable props', () => {
		expect(isClickable(fakeClickable())).toBe(true);
	});

	it('should return false for an invalid set of Clickable props', () => {
		expect(isClickable(fakeClickable({ onClick: null }))).toBe(false);
	});
});
