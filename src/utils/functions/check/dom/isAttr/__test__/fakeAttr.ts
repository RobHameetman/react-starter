import { faker } from '@faker-js/faker';
import { DomNodeTypes } from '@/utils/enums/DomNodeTypes';
import { fakeEventTarget } from '@/utils/functions/check/dom/isEventTarget/__test__';
import { fakeDomNodeNamespace } from '@/utils/enums/DomNodeNamespaces/__test__';

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

export const fakeAttr = ({
	defaultValue = false,
	ssr = typeof window === 'undefined',
	svg = false,
	name = faker.lorem.word(),
	namespaceURI = svg ? fakeDomNodeNamespace('SVG') : null,
	value = defaultValue ? faker.lorem.word() : '',
	...overrideProps
}: Record<string, unknown> = {}) => {
	let attr: Partial<Attr>;

	if (ssr) {
		attr = fakeEventTarget({ ssr }) as Partial<Attr>;

		Object.defineProperty(attr, 'nodeType', {
			writable: false,
			value: DomNodeTypes.ATTRIBUTE_NODE,
		});

		Object.defineProperty(attr, 'specified', {
			writable: false,
			value: true,
		});

		Object.defineProperty(attr, 'isConnected', {
			writable: false,
			value: false,
		});

		Object.defineProperty(attr, 'childNodes', {
			writable: false,
			value: [],
		});

		Object.defineProperty(attr, 'namespaceURI', {
			writable: false,
			value: namespaceURI,
		});

		OTHER_PROPS.forEach((prop) => {
			Object.defineProperty(attr, prop, {
				writable: false,
				value: null,
			});
		});

		NAME_PROPS.forEach((prop) => {
			Object.defineProperty(attr, prop, {
				writable: false,
				value: name,
			});
		});

		if (value) {
			VALUE_PROPS.forEach((prop) => {
				Object.defineProperty(attr, prop, {
					writable: true,
					value,
					set: (newValue: string) => {
						attr.nodeValue = newValue;
						attr.textContent = newValue;
						attr.value = newValue;
					},
				});
			});
		}
	} else {
		attr = document.createAttributeNS(namespaceURI as string, name as string);

		if (value) {
			attr.value = value as string;
		}
	}

	Object.entries(overrideProps).forEach(([key, value]) => {
		const prop = Object.getOwnPropertyDescriptor(attr, key) || {
			writable: false,
		};

		Object.defineProperty(attr, key, {
			...prop,
			value,
		});
	});

	return attr as Attr;
};
