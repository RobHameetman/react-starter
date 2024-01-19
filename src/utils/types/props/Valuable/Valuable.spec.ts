import { isValuable } from './Valuable';
import { fakeValuable } from './__test__';

describe('isValuable()', () => {
	it('should return true for a valid set of Valuable props', () => {
		expect(isValuable(fakeValuable())).toBe(true);
	});

	it('should return false for an invalid set of Valuable props', () => {
		expect(isValuable(fakeValuable({ value: null }))).toBe(false);
	});
});
