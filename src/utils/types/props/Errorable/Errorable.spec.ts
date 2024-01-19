import { isErrorable } from './Errorable';
import { fakeErrorable } from './__test__';

describe('isErrorable()', () => {
	it('should return true for a valid set of Errorable props', () => {
		expect(isErrorable(fakeErrorable())).toBe(true);
	});

	it('should return false for an invalid set of Errorable props', () => {
		expect(isErrorable(fakeErrorable({ onError: null }))).toBe(false);
	});
});
