import { isEnterable } from './Enterable';
import { fakeEnterable } from './__test__';

describe('isEnterable()', () => {
	it('should return true for a valid set of Enterable props', () => {
		expect(isEnterable(fakeEnterable())).toBe(true);
	});

	it('should return false for an invalid set of Enterable props', () => {
		expect(isEnterable(fakeEnterable({ onEnter: null }))).toBe(false);
	});
});
