import { faker } from '@faker-js/faker';
import { snakeCase } from '@app/utils/functions/string/snakeCase';

export const fakeIdentifiable = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	id: snakeCase(faker.lorem.words({ min: 1, max: 5 })),
	...overrideProps,
});
