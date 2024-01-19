import { SortOption } from '../SortOption';
import { randomSortOrder } from '../../../enums/SortOrder/__test__';

export const fakeSortOption = ({
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		sortOrder: randomSortOrder(),
		sortBy: jest.fn(),
		...overrideProps,
	} as SortOption);
