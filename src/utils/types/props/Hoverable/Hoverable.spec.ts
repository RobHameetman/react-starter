import { isHoverable } from './Hoverable';
import { fakeHoverable } from './__test__';

describe('isHoverable()', () => {
	it('should return true for a valid set of Hoverable props', () => {
		expect(isHoverable(fakeHoverable())).toBe(true);
	});

	it('should return false for an invalid set of Hoverable props', () => {
		expect(isHoverable(fakeHoverable({ onMouseEnter: null }))).toBe(false);
	});
});
