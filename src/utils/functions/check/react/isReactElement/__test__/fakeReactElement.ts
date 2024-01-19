import type { ReactElement } from 'react';
import { faker } from '@faker-js/faker';

interface Input extends Record<string, unknown> {
	readonly props?: Record<string, unknown>;
}

export const fakeReactElement = ({
	invalid = false,
	props = {},
	...overrideProps
}: Input = {}) => {
	const reactElement: Partial<ReactElement> = {
		type: faker.helpers.arrayElement(['div', 'span']),
		props: {
			...props,
		},
		...overrideProps,
	};

	if (invalid) {
		delete reactElement.type;
	}

	return reactElement as ReactElement;
};
