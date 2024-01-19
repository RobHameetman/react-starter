import { isStylable } from './Stylable';
import { fakeStylable } from './__test__';

describe('isStylable()', () => {
	it('should return true for a valid set of Stylable props', () => {
		expect(isStylable(fakeStylable())).toBe(true);
	});

	it('should return false for an invalid set of Stylable props', () => {
		expect(isStylable(fakeStylable({ className: null }))).toBe(false);
	});
});
