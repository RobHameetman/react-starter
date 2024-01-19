import { isAuxClickable } from './AuxClickable';
import { fakeAuxClickable } from './__test__';

describe('isAuxClickable()', () => {
	it('should return true for a valid set of AuxClickable props', () => {
		expect(isAuxClickable(fakeAuxClickable())).toBe(true);
	});

	it('should return false for an invalid set of AuxClickable props', () => {
		expect(isAuxClickable(fakeAuxClickable({ onAuxClick: null }))).toBe(false);
	});
});
