import { isPointerable } from './Pointerable';
import { fakePointerable } from './__test__';

describe('isPointerable()', () => {
	it('should return true for a valid set of Pointerable props', () => {
		expect(isPointerable(fakePointerable())).toBe(true);
	});

	it('should return false for an invalid set of Pointerable props', () => {
		expect(isPointerable(fakePointerable({ onPointerDown: null }))).toBe(false);
	});
});
