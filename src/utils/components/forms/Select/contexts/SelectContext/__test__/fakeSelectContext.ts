import { faker } from '@faker-js/faker';

export const fakeSelectContext = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	newState: faker.datatype.boolean(),
	newMethod: jest.fn(),
	...overrideProps,
});
