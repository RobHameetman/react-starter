import { faker } from '@faker-js/faker';

export const fakeNewType = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const theme = {
		required: faker.datatype.string(),
		method: jest.fn(() => faker.datatype.string()),
	} as Record<string, unknown>;

	faker.helpers.maybe(() => {
		theme.optional = faker.datatype.string();
	});

	return {
		...theme,
		...overrideProps,
	};
};
