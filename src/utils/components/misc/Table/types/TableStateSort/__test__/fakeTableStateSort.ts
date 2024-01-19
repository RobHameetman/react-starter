import { TableStateSort } from '../TableStateSort';
import { fakeSortByOptions } from '../../SortByOptions/__test__';
import { fakeTableCacheSort } from '../../TableCacheSort/__test__';

export const fakeTableStateSort = ({
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		...fakeTableCacheSort(),
		options: fakeSortByOptions(),
		...overrideProps,
	} as TableStateSort);
