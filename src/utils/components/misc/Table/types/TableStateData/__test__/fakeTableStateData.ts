import { faker } from '@faker-js/faker';
import { TableStateData } from '../TableStateData';
import { fakePaginatedData } from '../../PaginatedData/__test__';

export const fakeTableStateData = ({
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		buffer: faker.helpers.arrayElement([[], null]),
		displayedData: [],
		initialData: [],
		maxRows: faker.helpers.arrayElement([
			faker.helpers.arrayElement([10, 25, 50, 100]),
			null,
		]),
		paginatedData: faker.helpers.arrayElement([
			fakePaginatedData,
			() => null,
		])(),
		...overrideProps,
	} as TableStateData);
