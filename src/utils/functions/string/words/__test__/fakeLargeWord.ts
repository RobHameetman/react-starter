import { faker } from '@faker-js/faker';

export const fakeLargeWord = 'A'.repeat(
	faker.number.int({ min: 50000, max: 100000 }),
);
