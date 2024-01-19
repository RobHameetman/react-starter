import { faker } from '@faker-js/faker';

export const fakeErrorable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const errorable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		errorable.error = faker.datatype.boolean();
	});

	faker.helpers.maybe(() => {
		errorable.onError = jest.fn();
	});

	return {
		...errorable,
		...overrideProps,
	};
};
