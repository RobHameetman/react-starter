import { fakeTableState } from '../../../../state/TableState/__test__';

export const fakeNotLoadingTable = ({
	...overrideProperties
}: Record<string, unknown> = {}) =>
	fakeTableState({
		...overrideProperties,
		loading: false,
	});
