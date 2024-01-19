import { isIntentable } from './Intentable';
import { fakeIntentable } from './__test__';

describe('isIntentable()', () => {
	it('should return true for a valid set of Intentable props', () => {
		expect(isIntentable(fakeIntentable())).toBe(true);
	});

	it('should return false for an invalid set of Intentable props', () => {
		expect(isIntentable(fakeIntentable({ intent: null }))).toBe(false);
	});
});
