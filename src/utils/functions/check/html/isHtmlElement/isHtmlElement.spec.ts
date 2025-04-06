import { fakeNode } from '@/utils/functions/check/dom/isNode/__test__';
import { isHtmlElement } from './isHtmlElement';
import { $div, $svg } from './__test__';

describe('isHTMLElement()', () => {
	it('should return true given an HTML element', () => {
		expect(isHtmlElement($div)).toBe(true);
	});

	it('should return false given an SVG Element', () => {
		expect(isHtmlElement($svg)).toBe(false);
	});

	it('should return false given a Node that is not an ELEMENT_NODE', () => {
		expect(isHtmlElement(fakeNode({ nodeType: 2 }))).toBe(false);
	});
});
