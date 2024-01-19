import { faker } from '@faker-js/faker';

const fakeErrorMessage = () => faker.lorem.sentence({ min: 5, max: 10 });

export const fakeErrors = ({ invalid = false } = {}) =>
	Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () =>
		invalid ? { message: fakeErrorMessage() } : new Error(fakeErrorMessage()),
	);
