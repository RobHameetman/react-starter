import { isEscapable } from './Escapable';
import { fakeEscapable } from './__test__';

describe('isEscapable()', () => {
	it('should return true for a valid set of Escapable props', () => {
		expect(isEscapable(fakeEscapable())).toBe(true);
	});

	it('should return false for an invalid set of Escapable props', () => {
		expect(isEscapable(fakeEscapable({ onEscape: null }))).toBe(false);
	});
});
