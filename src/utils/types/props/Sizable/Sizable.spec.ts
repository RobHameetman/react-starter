import { isSizable } from './Sizable';
import { fakeSizable } from './__test__';

describe('isSizable()', () => {
	it('should return true for a valid set of Sizable props', () => {
		expect(isSizable(fakeSizable())).toBe(true);
	});

	it('should return false for an invalid set of Sizable props', () => {
		expect(isSizable(fakeSizable({ size: null }))).toBe(false);
	});
});
