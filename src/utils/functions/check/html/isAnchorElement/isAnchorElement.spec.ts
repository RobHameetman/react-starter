import { isAnchorElement } from './isAnchorElement';

describe('isAnchorElement()', () => {
	it('should return true given an HTML <a /> element', () => {
		expect(isAnchorElement(document.createElement('a'))).toBe(true);
	});

	it('should return true given an HTML element which is not <a />', () => {
		expect(isAnchorElement(document.createElement('div'))).toBe(false);
	});
});
