import { faker } from '@faker-js/faker';
import { capitalize } from '@/utils/functions/string/capitalize';

export const fakeHandlerPropName = ({ invalid = false } = {}) =>
	`${invalid ? 'render' : 'on'}${capitalize(faker.lorem.word())}`;
