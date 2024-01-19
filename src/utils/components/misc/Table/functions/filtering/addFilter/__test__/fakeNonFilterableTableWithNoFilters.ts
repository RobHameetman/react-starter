import { fakeNonFilterableTable } from '../../isFilterable/__test__';

export const fakeNonFilterableTableWithNoFilters = ({
	...overrideProperties
}: Record<string, unknown> = {}) =>
	fakeNonFilterableTable({
		...overrideProperties,
		filter: {
			...(overrideProperties.filter as Record<string, unknown>),
			filterBy: [],
		},
	});
