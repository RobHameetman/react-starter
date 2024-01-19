import faker from 'faker';
import { fakeNonFilterableTable } from '../../isFilterable/__test__';

export const fakeNonFilterableTableWithFilters = ({
	...overrideProperties
}: Record<string, unknown> = {}) =>
	fakeNonFilterableTable({
		...overrideProperties,
		filterBy: {
			...(overrideProperties.features as Record<string, unknown>),
			filterBy: ['color', 'make', 'model', 'type', 'vim'].slice(
				0,
				faker.datatype.number({ min: 1, max: 4 }),
			),
		},
	});
