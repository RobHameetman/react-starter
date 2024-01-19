import { isIdentifiable } from './Identifiable';
import { fakeIdentifiable } from './__test__';

describe('isIdentifiable()', () => {
	it('should return true for a valid set of Identifiable props', () => {
		expect(isIdentifiable(fakeIdentifiable())).toBe(true);
	});

	it('should return false for an invalid set of Identifiable props', () => {
		expect(isIdentifiable(fakeIdentifiable({ id: null }))).toBe(false);
	});
});
