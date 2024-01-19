import { isAttr } from './Attr';
import { fakeAttr } from './__test__';

describe('isAttr()', () => {
	it('should return true given a valid Attr', () => {
		expect(isAttr(fakeAttr())).toBe(true);
	});

	it('should return false given an invalid Attr', () => {
		expect(isAttr({ nodeType: 1 })).toBe(false);
	});
});
