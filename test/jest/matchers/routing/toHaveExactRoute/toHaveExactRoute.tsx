const TO_HAVE_EXACT_ROUTE = 'toHaveExactRoute';

expect.extend({
	[TO_HAVE_EXACT_ROUTE](received, ...args) {
		const { matcherHint, printExpected, printReceived } = this.utils;

		const options = {
			isNot: this.isNot,
			promise: this.promise,
		};

		const [route, routeWith] = args;

		const hasRoute = ($node = received): boolean => {
			try {
				if ($node === null) {
					throw new Error();
				}

				const { props, type } = $node;

				const hasChildren = 'children' in props;
				const isRoute = type.name === 'Route';

				if (isRoute) {
					return (
						'path' in props &&
						props.path === route &&
						'exact' in props &&
						props.exact &&
						(routeWith
							? 'element' in $node.props &&
							  $node.props.element.type.name === routeWith
							: true)
					);
				}

				if (hasChildren) {
					return props.children instanceof Array
						? props.children.some(hasRoute)
						: hasRoute(props.children);
				}

				return hasRoute(type());
			} catch {
				return false;
			}
		};

		const pass = hasRoute(received);

		const message = (): string =>
			`${matcherHint(TO_HAVE_EXACT_ROUTE, 'received', '', options)}\n\n` +
			`Expected ${printReceived(received)}${
				pass ? ' not' : ''
			} to have route ${printExpected(route)}${
				routeWith ? ` with ${printExpected(routeWith)}` : ''
			}\n`;

		return { pass, message };
	},
});
