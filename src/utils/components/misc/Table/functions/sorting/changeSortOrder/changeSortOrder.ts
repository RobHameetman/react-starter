import { SortOrder } from '../../../enums';
import { TableState } from '../../../types';

/**
 * A description of `changeSortOrder()`.
 *
 * @param sortOrder - The new sort order.
 * @param state - The current table state.
 *
 * @returns The updated table state.
 */
export const changeSortOrder = (
	sortOrder: SortOrder,
	state: TableState,
): TableState => {
	return {
		...state,
		sort: {
			...state.sort,
			direction: sortOrder,
		},
	};
};
