import { isNameable } from './Nameable';
import { fakeNameable } from './__test__';

describe('isNameable()', () => {
	it('should return true for a valid set of Nameable props', () => {
		expect(isNameable(fakeNameable())).toBe(true);
	});

	it('should return false for an invalid set of Nameable props', () => {
		expect(isNameable(fakeNameable({ name: null }))).toBe(false);
	});
});
