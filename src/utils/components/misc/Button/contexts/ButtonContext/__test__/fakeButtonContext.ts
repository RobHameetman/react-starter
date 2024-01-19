import { faker } from '@faker-js/faker';

export const fakeButtonContext = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	return {
		active: faker.helpers.arrayElement([faker.string.sample(), null]),
		toggle: faker.datatype.boolean(),
		activate: jest.fn(),
		...overrideProps,
	};
};
