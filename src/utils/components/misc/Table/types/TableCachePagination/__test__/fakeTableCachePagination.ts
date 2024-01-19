import { faker } from '@faker-js/faker';
import { TableCachePagination } from '../TableCachePagination';

export const fakeTableCachePagination = ({
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		count: faker.number.int({ min: 1, max: 5 }),
		currentPage: faker.number.int({ min: 1, max: 5 }),
		pageSize: faker.helpers.arrayElement([5, 10, 25, 50, 100]),
		...overrideProps,
	} as TableCachePagination);
