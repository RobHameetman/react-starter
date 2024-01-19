export const fakeEventTarget = ({
	ssr = typeof window !== 'undefined',
	...overrideProps
}: Record<string, unknown> = {}) => {
	const eventTarget = !ssr ? new EventTarget() : ({} as EventTarget);

	Object.defineProperty(eventTarget, 'addEventListener', {
		writable: false,
		value: !ssr
			? /* @ts-expect-error - A spread argument must either have a tuple type or be passed to a rest parameter. */
			  jest.fn((...args) => EventTarget.prototype.addEventListener(...args))
			: jest.fn(),
	});

	Object.defineProperty(eventTarget, 'dispatchEvent', {
		writable: false,
		value: !ssr
			? /* @ts-expect-error - A spread argument must either have a tuple type or be passed to a rest parameter. */
			  jest.fn((...args) => EventTarget.prototype.dispatchEvent(...args))
			: jest.fn(),
	});

	Object.defineProperty(eventTarget, 'removeEventListener', {
		writable: false,
		value: !ssr
			? /* @ts-expect-error - A spread argument must either have a tuple type or be passed to a rest parameter. */
			  jest.fn((...args) => EventTarget.prototype.removeEventListener(...args))
			: jest.fn(),
	});

	Object.entries(overrideProps).forEach(([key, value]) => {
		const prop = Object.getOwnPropertyDescriptor(eventTarget, key) || {
			writable: false,
		};

		Object.defineProperty(eventTarget, key, {
			...prop,
			value,
		});
	});

	return eventTarget;
};
