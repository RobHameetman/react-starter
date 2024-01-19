import { noop as _noop } from '@app/utils/functions/misc/noop';
import { faker } from '@faker-js/faker';

export const randomNoop = () => {
	const noop = () => {};

	return faker.helpers.arrayElement([noop, _noop]);
};
