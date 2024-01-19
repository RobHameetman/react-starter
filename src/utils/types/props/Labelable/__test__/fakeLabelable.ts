import { faker } from '@faker-js/faker';
import { snakeCase } from '@app/utils/functions/string/snakeCase';

export const fakeLabelable = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	label: snakeCase(faker.lorem.words({ min: 1, max: 5 })),
	...overrideProps,
});
