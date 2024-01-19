import { faker } from '@faker-js/faker';
import { PaginatedData } from '../PaginatedData';

export const fakePaginatedData = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const pageSize = faker.helpers.arrayElement([10, 25, 50, 100]);
	const pages = faker.number.int({ min: 3, max: 12 });

	return Array.from({ length: pages }, () =>
		Array.from({ length: pageSize }, () => ({
			data: faker.lorem.word(),
			...overrideProps,
		})),
	) as PaginatedData;
};
