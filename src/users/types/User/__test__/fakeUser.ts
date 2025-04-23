import { faker } from '@faker-js/faker';

export const fakeUser = ({ ...overrideProps } = {}) => {
	const user = {
		required: faker.string.alphanumeric(),
		method: jest.fn(() => faker.string.alphanumeric()),
	} as Record<string, unknown>;

	faker.helpers.maybe(() => {
		user.optional = faker.string.alphanumeric();
	});

	return {
		...user,
		...overrideProps,
	};
};
