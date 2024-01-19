import type { ReactNode } from 'react';

type MappedChildren<T, C> = C extends null | undefined
	? C
	: Array<Exclude<T, boolean | null | undefined>>;

export const mockChildren = jest.fn(() => ({
	count: jest.fn((children) => Array.from(children).length),
	forEach: jest.fn((children, fn) => Array.from(children).forEach(fn)),
	map: jest.fn(
		<T, C>(children: C, fn: (child: C, index: number) => T) =>
			Array.from(children as ArrayLike<C>).map(fn) as MappedChildren<T, C>,
	),
	only: jest.fn(<C>(children: C) => {
		const c = Array.from(children as ArrayLike<C>);

		if (!c.length) {
			throw new Error('Children must have exactly one child');
		}

		return c[0];
	}),
	toArray: jest.fn(
		(children) =>
			Array.from(children) as Array<
				Exclude<ReactNode, boolean | null | undefined>
			>,
	),
}));
