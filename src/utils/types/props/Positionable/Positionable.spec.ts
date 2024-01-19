import { isPositionable } from './Positionable';
import { fakePositionable } from './__test__';

describe('isPositionable()', () => {
	it('should return true for a valid set of Positionable props', () => {
		expect(isPositionable(fakePositionable())).toBe(true);
	});

	it('should return false for an invalid set of Positionable props', () => {
		expect(isPositionable(fakePositionable({ x: '2px' }))).toBe(false);
	});
});
