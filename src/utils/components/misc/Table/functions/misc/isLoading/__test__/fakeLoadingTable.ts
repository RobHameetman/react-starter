import { fakeTableState } from '../../../../state/TableState/__test__';

export const fakeLoadingTable = ({
	...overrideProperties
}: Record<string, unknown> = {}) =>
	fakeTableState({
		...overrideProperties,
		loading: true,
	});
