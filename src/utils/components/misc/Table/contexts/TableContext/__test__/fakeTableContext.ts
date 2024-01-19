import { faker } from '@faker-js/faker';
import { TableState } from '../../../types/TableState';

export const fakeTableContext = ({
	...overrideProps
}: Record<string, unknown> = {}) => ({
	initialData: null,
	name: faker.lorem.words({ min: 2, max: 5 }),
	state: {} as TableState,
	handleChangeFilter: jest.fn(),
	handleChangePage: jest.fn(),
	handleChangeRowsPerPage: jest.fn(),
	handleChangeSearchInput: jest.fn(),
	handleChangeSortOrder: jest.fn(),
	handleChangeSortType: jest.fn(),
	setColumnCount: jest.fn(),
	setFilterable: jest.fn(),
	setOnFilterFn: jest.fn(),
	setPaginated: jest.fn(),
	setSearchable: jest.fn(),
	setSearchAgainstFn: jest.fn(),
	...overrideProps,
});
