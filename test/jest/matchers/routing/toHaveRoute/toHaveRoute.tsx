const TO_HAVE_ROUTE = 'toHaveRoute';

/**
 * Jest uses `Object.is()` for equality checking, which distinguishes 0 from -0,
 * which can cause false negatives (literally!) when we try to use `.toBe(0)` or
 * `.toEqual(0)`.
 *
 * @see https://github.com/jasmine/jasmine/issues/496
 */
expect.extend({
	[TO_HAVE_ROUTE](received, ...args) {
		const {
			matcherHint,
			printExpected,
			printReceived,
		} = this.utils;

		const options = {
			isNot: this.isNot,
			promise: this.promise,
		};

		const [route, routeWith] = args;

		const hasRoute = ($node = received) => {
			try {
				if ($node === null) {
					throw new Error();
				}

				const { props, type } = $node;

				const hasChildren = 'children' in props;
				const isRoute = type.name === 'Route';

				if (isRoute) {
					return 'path' in props &&
						props.path === route &&
						(routeWith
							? (
									'element' in $node.props &&
									$node.props.element.type.name === routeWith
								)
							: true);
				} else if (hasChildren) {
					return props.children instanceof Array
						? props.children.some(hasRoute)
						: hasRoute(props.children);
				} else {
					return hasRoute(type());
				}
			} catch {
				return false;
			}
		};

		let pass = hasRoute(received);

		const message = (): string =>
			`${matcherHint(TO_HAVE_ROUTE, 'received', '', options)}\n\n` +
			`Expected ${printReceived(received)}${
				pass ? ' not' : ''
			} to have route ${printExpected(route)}${routeWith ? ` with ${printExpected(routeWith)}` : ''}\n`;

		return { pass, message };
	},
});
