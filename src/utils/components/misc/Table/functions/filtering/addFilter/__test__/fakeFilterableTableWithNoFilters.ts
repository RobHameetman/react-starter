import { fakeFilterableTable } from '../../isFilterable/__test__';

export const fakeFilterableTableWithNoFilters = ({
	...overrideProperties
}: Record<string, unknown> = {}) =>
	fakeFilterableTable({
		...overrideProperties,
		filter: {
			...(overrideProperties.filter as Record<string, unknown>),
			filterBy: [],
		},
	});
