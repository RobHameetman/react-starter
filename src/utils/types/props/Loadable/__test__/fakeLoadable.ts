import { faker } from '@faker-js/faker';

export const fakeLoadable = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const loadable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		loadable.loading = faker.datatype.boolean();
	});

	faker.helpers.maybe(() => {
		loadable.onLoad = jest.fn();
	});

	return {
		...loadable,
		...overrideProps,
	};
};
