import { faker } from '@faker-js/faker';

export const fakeCloseable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const closeable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		closeable.closed = faker.datatype.boolean();
	});

	faker.helpers.maybe(() => {
		closeable.onClose = jest.fn();
	});

	faker.helpers.maybe(() => {
		closeable.onCloseCapture = jest.fn();
	});

	return {
		...closeable,
		...overrideProps,
	};
};
