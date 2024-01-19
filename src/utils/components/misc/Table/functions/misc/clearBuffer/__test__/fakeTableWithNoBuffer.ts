import { fakeTableState } from '../../../../state/TableState/__test__';

export const fakeTableWithNoBuffer = ({
	...overrideProperties
}: Record<string, unknown> = {}) =>
	fakeTableState({
		...overrideProperties,
		data: {
			...(overrideProperties.data as Record<string, unknown>),
			buffer: null,
		},
	});
