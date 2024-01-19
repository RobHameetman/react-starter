import { faker } from '@faker-js/faker';
import { snakeCase } from '@app/utils/functions/string/snakeCase';

export const fakeNameable = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	name: snakeCase(faker.lorem.words({ min: 1, max: 5 })),
	...overrideProps,
});
