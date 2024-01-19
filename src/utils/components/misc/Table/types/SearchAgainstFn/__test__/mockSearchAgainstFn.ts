import { faker } from '@faker-js/faker';

export const mockSearchAgainstFn = jest.fn(() =>
	faker.lorem.words({ min: 2, max: 10 }),
);
