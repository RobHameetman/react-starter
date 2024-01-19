import { fakeTableState } from '../../../../state/TableState/__test__';

export const fakeNonSearchableTable = ({
	...overrideProperties
}: Record<string, unknown> = {}) =>
	fakeTableState({
		...overrideProperties,
		features: {
			...(overrideProperties.features as Record<string, unknown>),
			searchable: false,
		},
	});
