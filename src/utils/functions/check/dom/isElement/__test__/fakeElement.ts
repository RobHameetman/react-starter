import { faker } from '@faker-js/faker';
import { DomNodeTypes } from '@/utils/enums/DomNodeTypes';
import { fakeEventTarget } from '@/utils/functions/check/dom/isEventTarget/__test__';
import { fakeDomNodeNamespace } from '@/utils/enums/DomNodeNamespaces/__test__';
import { fakeAttributes } from '@/utils/types/dom/Attributes/__test__';
import { fakeNode } from '../../isNode/__test__';

const NAME_PROPS = Object.freeze(['localName', 'name', 'nodeName']);
const VALUE_PROPS = Object.freeze(['nodeValue', 'textContent', 'value']);

const OTHER_PROPS = Object.freeze([
	'firstChild',
	'lastChild',
	'nextSibling',
	'ownerElement',
	'parentElement',
	'parentNode',
	'prefix',
	'previousSibling',
]);

export const fakeElement = ({
	defaultValue = false,
	ssr = typeof window === 'undefined',
	svg = false,
	name: _name = faker.helpers.arrayElement([
		faker.lorem.word(),
		`${faker.lorem.word()}:${faker.lorem.word()}`,
	]),
	namespaceURI = svg ? fakeDomNodeNamespace('SVG') : null,
	scrollTop = 0,
	scrollLeft = 0,
	shadowRoot = null,
	slot = '',
	value = defaultValue ? faker.lorem.word() : '',
	...overrideProps
}: Record<string, unknown> = {}) => {
	const nomenclature = (_name as string).split(':');
	const hasPrefix = nomenclature.length > 1;
	const [nameOrPrefix, localName] = nomenclature;

	const element = fakeNode({
		nodeType: DomNodeTypes.ELEMENT_NODE,
		attributes: fakeAttributes({ ssr }),
		clientHeight: faker.number.int({ min: 0, max: 1000 }),
		clientLeft: faker.number.int({ min: 0, max: 1000 }),
		clientTop: faker.number.int({ min: 0, max: 1000 }),
		clientWidth: faker.number.int({ min: 0, max: 1000 }),
		id: faker.lorem.word(),
		localName: hasPrefix ? localName : nameOrPrefix,
		namespaceURI,
		outerHTML: `<${_name}></${_name}>`,
		ownerDocument: ssr ? document : null,
		part: [],
		prefix: hasPrefix ? nameOrPrefix : null,
		scrollHeight: faker.number.int({ min: 0, max: 1000 }),
		scrollWidth: faker.number.int({ min: 0, max: 1000 }),
		scrollLeft,
		scrollTop,
		shadowRoot,
		slot,
		attachShadow: jest.fn(),
		checkVisibility: jest.fn(),
		closest: jest.fn(() => null),
		computedStyleMap: jest.fn(),
		getAttribute: jest.fn(() => null),
		getAttributeNS: jest.fn(() => null),
		getAttributeNames: jest.fn(() => []),
	});

	Object.entries(overrideProps).forEach(([key, value]) => {
		const prop = Object.getOwnPropertyDescriptor(element, key) || {
			writable: false,
		};

		Object.defineProperty(element, key, {
			...prop,
			value,
		});
	});

	return element as Element;
};
