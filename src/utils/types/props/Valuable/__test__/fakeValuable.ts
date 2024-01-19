import { faker } from '@faker-js/faker';

export const fakeValuable = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	value: faker.lorem.words({ min: 1, max: 5 }),
	...overrideProps,
});
