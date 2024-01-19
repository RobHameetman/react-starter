import { fakeAttr } from '../../Attr/__test__';

const findNamedItem =
	(name: string) =>
	({ localName }: Attr) =>
		localName === name;
const findNamedItemNS =
	(ns: string, name: string) =>
	({ localName, namespaceURI }: Attr) =>
		localName === name && (namespaceURI?.includes(ns) || false);

const retrieveAttr = (name: string, ns?: string) =>
	ns ? findNamedItemNS(ns, name) : findNamedItem(name);

class FakeAttributes {
	#attributes: Array<Attr>;

	constructor(attributes: Array<Attr> = []) {
		this.#attributes = attributes;
	}

	getNamedItem = jest.fn((name: string) => {
		return this.#attributes.find(this.#findNamedItem(name)) ?? null;
	});

	getNamedItemNS = jest.fn((ns: string, name: string) => {
		return this.#attributes.find(this.#findNamedItemNS(ns, name)) ?? null;
	});

	item = jest.fn((index: number) => {
		return this.#attributes[index] ?? null;
	});

	removeNamedItem = jest.fn((name: string) => {
		return this.#removeOrThrowError(name);
	});

	removeNamedItemNS = jest.fn((ns: string, name: string) => {
		return this.#removeOrThrowError(name);
	});

	setNamedItem = jest.fn((attr: Attr) => {
		return this.#setOrReplace(attr);
	});

	setNamedItemNS = jest.fn((attr: Attr) => {
		return this.#setOrReplace(attr);
	});

	#findNamedItem =
		(name: string) =>
		({ localName }: Attr) =>
			localName === name;

	#findNamedItemNS =
		(ns: string, name: string) =>
		({ localName, namespaceURI }: Attr) =>
			localName === name && (namespaceURI?.includes(ns) || false);

	#removeOrThrowError(name: string, ns?: string) {
		const attr = this.#attributes.find(
			ns ? this.#findNamedItemNS(ns, name) : this.#findNamedItem(name),
		);

		if (!attr) {
			throw new Error(`Could not find attribute ${name}`);
		}

		this.#attributes = this.#attributes.filter((_attr) => _attr !== attr);

		return attr;
	}

	#setOrReplace(attr: Attr) {
		const { localName: name, namespaceURI: ns } = attr;
		const existingAttr = this.#attributes.find(
			ns ? this.#findNamedItemNS(ns, name) : this.#findNamedItem(name),
		);

		if (!attr) {
			this.#attributes = [...this.#attributes, attr];

			return null;
		}

		this.#attributes = [
			...this.#attributes.filter((_attr) => _attr !== existingAttr),
			attr,
		];

		return attr;
	}
}

export const fakeAttributes = ({
	ssr = typeof window === 'undefined',
	seed = false,
	attrName = 'role',
	attrValue = 'button',
	...overrideProps
}: Record<string, unknown> = {}) => {
	let attributes: object;

	if (!ssr) {
		const $element = document.createElement('div');

		({ attributes } = $element);

		const attribute = fakeAttr({ ssr, attrName, attrValue });
	} else {
		const _attributes: Array<Attr> = [];

		attributes = {
			getNamedItem: jest.fn(
				(name: string) => _attributes.find(retrieveAttr(name)) ?? null,
			),
			getNamedItemNS: jest.fn(
				(ns: string, name: string) =>
					_attributes.find(retrieveAttr(name, ns)) ?? null,
			),
			item: jest.fn((index: number) => _attributes[index] ?? null),
			removeNamedItem: jest.fn((name: string) => {
				const attr = _attributes.find(findNamedItem(name));

				if (!attr) {
					throw new Error(`Could not find attribute ${name}`);
				}

				return attr;
			}),
		};

		attributes = {
			...overrideProps,
			/**
			 * @todo
			 * This is a fake for `NamedNodeMap` that needs to be replaced with a fake for `Attr[]`.
			 */
			__proto__: {} as NamedNodeMap,
		};
	}
};
