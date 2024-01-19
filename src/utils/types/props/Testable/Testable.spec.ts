import { isTestable } from './Testable';
import { fakeTestable } from './__test__';

describe('isTestable()', () => {
	it('should return true for a valid set of Testable props', () => {
		expect(isTestable(fakeTestable())).toBe(true);
	});

	it('should return false for an invalid set of Testable props', () => {
		expect(isTestable(fakeTestable({ testId: null }))).toBe(false);
	});
});
