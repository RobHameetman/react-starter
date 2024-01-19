import { isTabbable } from './Tabbable';
import { fakeTabbable } from './__test__';

describe('isTabbable()', () => {
	it('should return true for a valid set of Tabbable props', () => {
		expect(isTabbable(fakeTabbable())).toBe(true);
	});

	it('should return false for an invalid set of Tabbable props', () => {
		expect(isTabbable(fakeTabbable({ onTab: null }))).toBe(false);
	});
});
