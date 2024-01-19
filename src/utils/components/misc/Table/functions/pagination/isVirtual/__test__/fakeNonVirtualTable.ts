import { fakeTableState } from '../../../../state/TableState/__test__';

export const fakeNonVirtualTable = ({
	...overrideProperties
}: Record<string, unknown> = {}) =>
	fakeTableState({
		...overrideProperties,
		features: {
			...(overrideProperties.features as Record<string, unknown>),
			virtual: false,
		},
	});
