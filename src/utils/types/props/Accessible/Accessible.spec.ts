import { isAccessible } from './Accessible';
import { fakeAccessible } from './__test__';

describe('isAccessible()', () => {
	it('should return true for a valid set of Accessible props', () => {
		expect(isAccessible(fakeAccessible())).toBe(true);
	});

	it('should return false for an invalid set of Accessible props', () => {
		expect(isAccessible(fakeAccessible({ tabIndex: null }))).toBe(false);
	});
});
