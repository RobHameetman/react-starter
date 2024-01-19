import { faker } from '@faker-js/faker';
import { TableCacheFilter } from '../TableCacheFilter';

export const fakeTableCacheFilter = ({
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		filterBy: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () =>
			faker.string.sample(),
		),
		searchBy: faker.lorem.words({ min: 1, max: 5 }),
		...overrideProps,
	} as TableCacheFilter);
