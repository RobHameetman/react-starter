import { isNode } from './isNode';
import { fakeNode } from './__test__';

describe('isNode()', () => {
	it('should return true given a valid Node', () => {
		expect(isNode(fakeNode())).toBe(true);
	});

	it('should return false given an invalid Node', () => {
		expect(isNode({})).toBe(false);
	});
});
