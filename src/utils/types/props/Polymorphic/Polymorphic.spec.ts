import { isPolymorphic } from './Polymorphic';
import { fakePolymorphic } from './__test__';

describe('isPolymorphic()', () => {
	it('should return true for a valid set of Polymorphic props', () => {
		expect(isPolymorphic(fakePolymorphic())).toBe(true);
	});

	it('should return false for an invalid set of Polymorphic props', () => {
		expect(isPolymorphic(fakePolymorphic({ as: '' }))).toBe(false);
	});
});
