import { faker } from '@faker-js/faker';

export const fakeExpansible = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const expansible: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		expansible.fullWidth = faker.datatype.boolean();
	});

	return {
		...expansible,
		...overrideProps,
	};
};
