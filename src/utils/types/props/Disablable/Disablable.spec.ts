import { isDisablable } from './Disablable';
import { fakeDisablable } from './__test__';

describe('isDisablable()', () => {
	it('should return true for a valid set of Disablable props', () => {
		expect(isDisablable(fakeDisablable())).toBe(true);
	});

	it('should return false for an invalid set of Disablable props', () => {
		expect(isDisablable(fakeDisablable({ disabled: null }))).toBe(false);
	});
});
