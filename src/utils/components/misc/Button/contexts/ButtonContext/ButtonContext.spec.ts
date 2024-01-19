import { isButtonContext } from './ButtonContext';
import { fakeButtonContext } from './__test__';

describe('isButtonContext()', () => {
	it('should return true given a valid ButtonContext', () => {
		expect(isButtonContext(fakeButtonContext())).toBe(true);
	});

	it('should return false given an invalid ButtonContext', () => {
		expect(isButtonContext(fakeButtonContext({ active: '' }))).toBe(false);
	});
});
