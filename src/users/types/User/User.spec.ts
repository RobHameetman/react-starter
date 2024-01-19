import { isUser } from './User';
import { fakeUser } from './__test__';

describe('isUser()', () => {
	it('should return true given a valid User', () => {
		expect(isUser(fakeUser())).toBe(true);
	});

	it('should return false given an invalid User', () => {
		expect(isUser(fakeUser({ required: null }))).toBe(false);
	});
});
