import { SortType } from '../../../enums';
import { TableState } from '../../../types';

/**
 * A description of `changeSortOrder()`.
 *
 * @param sortType - The new sort type.
 * @param state - The current table state.
 *
 * @returns The updated table state.
 */
export const changeSortType = (
	sortType: SortType,
	state: TableState,
): TableState => {
	return {
		...state,
		sort: {
			...state.sort,
			active: sortType,
		},
	};
};
