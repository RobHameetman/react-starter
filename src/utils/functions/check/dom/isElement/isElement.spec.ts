import { DomNodeNamespaces } from '@/utils/enums';
import { fakeNode } from '@/utils/functions/check/dom/isNode/__test__';
import { isHTMLElement } from './isElement';

describe('isHTMLElement()', () => {
	it('should return true given an HTML element', () => {
		expect(isHTMLElement(document.createElement('div'))).toBe(true);
	});

	it('should return false given an SVG Element', () => {
		expect(
			isHTMLElement(document.createElementNS(DomNodeNamespaces.SVG, 'svg')),
		).toBe(false);
	});

	it('should return false given a Node that is not an ELEMENT_NODE', () => {
		expect(isHTMLElement(fakeNode({ nodeType: 2 }))).toBe(false);
	});
});
