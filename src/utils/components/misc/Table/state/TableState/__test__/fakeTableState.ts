import { faker } from '@faker-js/faker';

type TableStateObj = Record<string, Record<string, unknown>>;

export const fakeTableState = ({ ...overrideProperties } = {}) => {
	const initialData = Array.from(
		{
			length: faker.number.int({ min: 2, max: 100 }),
		},
		() => ({
			color: faker.vehicle.color(),
			make: faker.vehicle.manufacturer(),
			model: faker.vehicle.model(),
			type: faker.vehicle.type(),
			vin: faker.vehicle.vin(),
		}),
	);

	return {
		columns: faker.number.int({ min: 0, max: 8 }),
		loading: false,
		name: 'test',
		...overrideProperties,
		data: {
			buffer: null,
			displayedData: [],
			initialData,
			maxRows: [null, faker.number.int({ min: 3, max: 10 })][
				faker.number.int({ min: 0, max: 1 })
			],
			paginatedData: null,
			...(overrideProperties as TableStateObj).data,
		},
		features: {
			filterable: false,
			paginated: false,
			searchable: false,
			virtual: false,
			...(overrideProperties as TableStateObj).features,
		},
		filter: {
			filterBy: [],
			searchBy: '',
			onFilter: () => false,
			searchAgainst: () => '',
			...(overrideProperties as TableStateObj).filter,
		},
		sort: {
			active: '',
			direction: 'asc',
			options: {},
			...(overrideProperties as TableStateObj).sort,
		},
		pagination: {
			count: 0,
			currentPage: 1,
			pageSize: 10,
			...(overrideProperties as TableStateObj).pagination,
		},
	};
};
