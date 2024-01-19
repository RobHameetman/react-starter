import { faker } from '@faker-js/faker';
import { fakeNode } from '@app/utils/functions/check/dom/isNode/__test__';
import { Attr } from '../Attr';

export const fakeAttr = <K extends string = string, V extends string = string>({
	ssr = typeof window === 'undefined',
	attrName = faker.lorem.word(),
	attrValue = faker.lorem.word(),
	ownerElement = null,
	prefix = null,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const name = attrName as string;
	const value = attrValue as string;

	const attr = fakeNode({
		ssr,
		type: 'ATTRIBUTE_NODE',
		localName: name,
		name,
		nodeName: name,
		nodeValue: value,
		ownerElement,
		prefix,
		specified: true,
		textContent: value,
		value,
	});

	if (value) {
		Object.defineProperty(attr, 'value', {
			...Object.getOwnPropertyDescriptor(attr, 'value'),
			set: (newValue: string) => {
				attr.nodeValue = newValue;
				attr.textContent = newValue;
			},
		});
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

	return attr as Attr<K, V>;
};
