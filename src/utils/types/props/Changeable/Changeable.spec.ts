import { isChangeable } from './Changeable';
import { fakeChangeable } from './__test__';

describe('isChangeable()', () => {
	it('should return true for a valid set of Changeable props', () => {
		expect(isChangeable(fakeChangeable())).toBe(true);
	});

	it('should return false for an invalid set of Changeable props', () => {
		expect(isChangeable(fakeChangeable({ onChange: null }))).toBe(false);
	});
});
