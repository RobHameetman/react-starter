import { NewContext, isNewContext } from './NewContext';
import { fakeNewContext } from './__test__';

describe('isNewContext()', () => {
	it('should return true given a valid NewContext', () => {
		expect(isNewContext(fakeNewContext())).toBe(true);
	});

	it('should return false given an invalid NewContext', () => {
		expect(isNewContext(fakeNewContext({ theme: undefined }))).toBe(false);
	});
});
