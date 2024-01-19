import { faker } from '@faker-js/faker';

export const fakeUser = ({ ...overrideProps } = {}) => {
	const user = {
		required: faker.datatype.string(),
		method: jest.fn(() => faker.datatype.string()),
	} as Record<string, unknown>;

	faker.helpers.maybe(() => {
		user.optional = faker.datatype.string();
	});

	return {
		...user,
		...overrideProps,
	};
};
