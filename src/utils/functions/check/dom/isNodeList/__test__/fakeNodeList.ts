export const fakeNodeList = ({
	ssr = typeof window === 'undefined',
	nodes = [],
	...overrideProps
}: Record<string, unknown> = {}) => {
	const _nodes = nodes as ReadonlyArray<Node>;
	let nodeList: Partial<NodeList>;

	if (!ssr) {
		const $element = document.createElement('div');
		const { childNodes } = $element;

		nodeList = childNodes;
	} else {
		nodeList = {} as Partial<NodeList>;
	}

	_nodes.forEach((node, index) => {
		Object.defineProperty(nodeList, index, {
			writable: false,
			value: node,
		});
	});

	Object.defineProperty(nodeList, 'length', {
		writable: false,
		value: _nodes.length,
	});

	Object.defineProperty(nodeList, 'entries', {
		writable: false,
		value: !ssr
			? /* @ts-expect-error - A spread argument must either have a tuple type or be passed to a rest parameter. */
			  jest.fn((...args) => NodeList.prototype.entries(...args))
			: jest.fn(() => Object.entries(_nodes)),
	});

	Object.defineProperty(nodeList, 'forEach', {
		writable: false,
		value: !ssr
			? /* @ts-expect-error - A spread argument must either have a tuple type or be passed to a rest parameter. */
			  jest.fn((...args) => NodeList.prototype.forEach(...args))
			: jest.fn(
					(
						callback: (
							node: Node,
							index: number,
							arr: ReadonlyArray<Node>,
						) => void,
					) => Object.values(_nodes).forEach(callback),
			  ),
	});

	Object.defineProperty(nodeList, 'item', {
		writable: false,
		value: !ssr
			? /* @ts-expect-error - A spread argument must either have a tuple type or be passed to a rest parameter. */
			  jest.fn((...args) => NodeList.prototype.item(...args))
			: jest.fn((index: number) => _nodes.at(index)),
	});

	Object.defineProperty(nodeList, 'keys', {
		writable: false,
		value: !ssr
			? /* @ts-expect-error - A spread argument must either have a tuple type or be passed to a rest parameter. */
			  jest.fn((...args) => NodeList.prototype.keys(...args))
			: jest.fn(() => Object.keys(_nodes)),
	});

	Object.defineProperty(nodeList, 'values', {
		writable: false,
		value: !ssr
			? /* @ts-expect-error - A spread argument must either have a tuple type or be passed to a rest parameter. */
			  jest.fn((...args) => NodeList.prototype.values(...args))
			: jest.fn(() => Object.values(_nodes)),
	});

	Object.entries(overrideProps).forEach(([key, value]) => {
		const prop = Object.getOwnPropertyDescriptor(nodeList, key) || {
			writable: false,
		};

		Object.defineProperty(nodeList, key, {
			...prop,
			value,
		});
	});

	return nodeList as NodeList;
};
