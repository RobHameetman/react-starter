import { faker } from '@faker-js/faker';

export const fakeTheme = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const theme = {
		required: faker.string.alphanumeric(),
		method: jest.fn(() => faker.string.alphanumeric()),
	} as Record<string, unknown>;

	faker.helpers.maybe(() => {
		theme.optional = faker.string.alphanumeric();
	});

	return {
		...theme,
		...overrideProps,
	};
};
