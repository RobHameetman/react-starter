import { faker } from '@faker-js/faker';

export const fakeDisablable = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	disabled: faker.datatype.boolean(),
	...overrideProps,
});
