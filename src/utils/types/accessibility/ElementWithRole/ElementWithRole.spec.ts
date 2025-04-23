import { isElementWithRole } from './ElementWithRole';
import { fakeElementWithRole } from './__test__';

describe('isElementWithRole()', () => {
	it('should return true given a valid ElementWithRole', () => {
		expect(isElementWithRole(fakeElementWithRole({ role: 'test' }), 'test')).toBe(true);
	});

	it('should return false given an invalid ElementWithRole', () => {
		expect(isElementWithRole(fakeElementWithRole({ role: null }), 'test')).toBe(
			false,
		);
	});
});
