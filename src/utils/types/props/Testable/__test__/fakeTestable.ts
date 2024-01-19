import { faker } from '@faker-js/faker';

export const fakeTestable = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	testId: faker.string.sample(),
	...overrideProps,
});
