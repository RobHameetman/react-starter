import { faker } from '@faker-js/faker';

export const fakeDoubleClickable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const doubleClickable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		doubleClickable.onDoubleClick = jest.fn();
	});

	faker.helpers.maybe(() => {
		doubleClickable.onDoubleClickCapture = jest.fn();
	});

	return {
		...doubleClickable,
		...overrideProps,
	};
};
