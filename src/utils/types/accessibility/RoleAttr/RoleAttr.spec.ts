import { isRoleAttr } from './RoleAttr';
import { fakeRoleAttr } from './__test__';

describe('isRoleAttr()', () => {
	it('should return true given a valid RoleAttr', () => {
		expect(isRoleAttr(fakeRoleAttr())).toBe(true);
	});

	it('should return false given an invalid RoleAttr', () => {
		expect(isRoleAttr(fakeRoleAttr({ type: 'drag' }))).toBe(false);
	});
});
