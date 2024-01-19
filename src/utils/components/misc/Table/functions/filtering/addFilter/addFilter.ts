import { isFilterable } from '../isFilterable';
import { TableState } from '../../../types';

/**
 * Add a filter to the list of active table filters.
 *
 * @param filter - The new filter to add.
 * @param state - The current table state.
 *
 * @returns The updated table state.
 */
export const addFilter = (filter: string, state: TableState): TableState => {
	if (isFilterable(state)) {
		return {
			...state,
			filter: {
				...state.filter,
				filterBy: [...state.filter.filterBy, filter],
			},
		};
	}

	return state;
};
