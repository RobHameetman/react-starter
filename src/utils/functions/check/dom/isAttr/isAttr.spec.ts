import { isAttr } from './isAttr';
import { fakeAttr } from './__test__';

describe('isAttr()', () => {
	it('should return true given a valid Attr', () => {
		expect(isAttr(fakeAttr())).toBe(true);
	});

	it('should return false given an invalid Attr', () => {
		expect(isAttr(fakeAttr({ brands: null }))).toBe(false);
	});
});
