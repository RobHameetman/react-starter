import { faker } from '@faker-js/faker';

export const fakeStylable = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	className: faker.string.sample(),
	...overrideProps,
});
