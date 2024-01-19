import { TableCacheSort } from '../TableCacheSort';
import { randomSortOrder } from '../../../enums/SortOrder/__test__';
import { randomSortType } from '../../../enums/SortType/__test__';

export const fakeTableCacheSort = ({
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		active: randomSortType(),
		direction: randomSortOrder(),
		...overrideProps,
	} as TableCacheSort);
