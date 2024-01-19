import { isSpaceable } from './Spaceable';
import { fakeSpaceable } from './__test__';

describe('isSpaceable()', () => {
	it('should return true for a valid set of Spaceable props', () => {
		expect(isSpaceable(fakeSpaceable())).toBe(true);
	});

	it('should return false for an invalid set of Spaceable props', () => {
		expect(isSpaceable(fakeSpaceable({ onSpace: null }))).toBe(false);
	});
});
