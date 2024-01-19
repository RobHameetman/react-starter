import { isRequirable } from './Requirable';
import { fakeRequirable } from './__test__';

describe('isRequirable()', () => {
	it('should return true for a valid set of Requirable props', () => {
		expect(isRequirable(fakeRequirable())).toBe(true);
	});

	it('should return false for an invalid set of Requirable props', () => {
		expect(isRequirable(fakeRequirable({ onLoad: null }))).toBe(false);
	});
});
