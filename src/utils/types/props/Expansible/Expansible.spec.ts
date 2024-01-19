import { isExpansible } from './Expansible';
import { fakeExpansible } from './__test__';

describe('isExpansible()', () => {
	it('should return true for a valid set of Expansible props', () => {
		expect(isExpansible(fakeExpansible())).toBe(true);
	});

	it('should return false for an invalid set of Expansible props', () => {
		expect(isExpansible(fakeExpansible({ fullWidth: null }))).toBe(false);
	});
});
