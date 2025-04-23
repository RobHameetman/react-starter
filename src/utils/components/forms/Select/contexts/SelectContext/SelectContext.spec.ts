import { SelectContext, isSelectContext } from './SelectContext';
import { fakeSelectContext } from './__test__';

describe('isSelectContext()', () => {
	it('should return true given a valid SelectContext', () => {
		expect(isSelectContext(fakeSelectContext())).toBe(true);
	});

	it('should return false given an invalid SelectContext', () => {
		expect(isSelectContext(fakeSelectContext({ theme: undefined }))).toBe(false);
	});
});
