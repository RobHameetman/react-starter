import { isFilterable } from '../isFilterable';
import { TableState } from '../../../types';

/**
 * Reset the list of active table filters.
 *
 * @param filter - The filter to remove.
 * @param state - The current table state.
 *
 * @returns The updated table state.
 */
export const resetFilters = (state: TableState): TableState => {
	if (isFilterable(state)) {
		return {
			...state,
			filter: {
				...state.filter,
				filterBy: [],
			},
		};
	}

	return state;
};
