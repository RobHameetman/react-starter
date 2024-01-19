import { fakeTableState } from '../../../../state/TableState/__test__';

export const fakeNonFilterableTable = ({
	...overrideProperties
}: Record<string, unknown> = {}) =>
	fakeTableState({
		...overrideProperties,
		features: {
			...(overrideProperties.features as Record<string, unknown>),
			filterable: false,
		},
	});
