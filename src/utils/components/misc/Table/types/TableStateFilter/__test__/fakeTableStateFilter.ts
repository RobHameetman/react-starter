import { TableStateFilter } from '../TableStateFilter';
import { fakeTableCacheFilter } from '../../TableCacheFilter/__test__';

export const fakeTableStateFilter = ({
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		...fakeTableCacheFilter(),
		onFilter: jest.fn(),
		searchAgainst: jest.fn(),
		...overrideProps,
	} as TableStateFilter);
