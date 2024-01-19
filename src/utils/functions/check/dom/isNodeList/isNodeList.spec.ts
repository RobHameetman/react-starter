import { isNodeList } from './isNodeList';
import { fakeNodeList } from './__test__';

describe('isNodeList()', () => {
	it('should return true given a valid NodeList', () => {
		expect(isNodeList(fakeNodeList())).toBe(true);
	});

	it('should return false given an invalid NodeList', () => {
		expect(isNodeList([])).toBe(false);
	});
});
