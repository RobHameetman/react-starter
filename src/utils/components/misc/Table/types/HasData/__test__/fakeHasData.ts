import { faker } from '@faker-js/faker';
import { HasData } from '../HasData';

export const fakeHasData = ({
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		data: faker.helpers.arrayElement([
			Array.from({ length: faker.number.int({ min: 1, max: 100 }) }, () =>
				faker.string.sample(),
			),
			null,
		]),
		...overrideProps,
	} as HasData);
