import { isRoundable } from './Roundable';
import { fakeRoundable } from './__test__';

describe('isRoundable()', () => {
	it('should return true for a valid set of Roundable props', () => {
		expect(isRoundable(fakeRoundable())).toBe(true);
	});

	it('should return false for an invalid set of Roundable props', () => {
		expect(isRoundable(fakeRoundable({ rounded: null }))).toBe(false);
	});
});
