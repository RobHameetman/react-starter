import { isFilterable } from '../isFilterable';
import { TableState } from '../../../types';

/**
 * Remove a filter from the list of active table filters.
 *
 * @param filter - The filter to remove.
 * @param state - The current table state.
 *
 * @returns The updated table state.
 */
export const removeFilter = (filter: string, state: TableState): TableState => {
	if (isFilterable(state)) {
		const filters = [...state.filter.filterBy];
		const index = filters.indexOf(filter);

		if (index !== -1) {
			[filters].splice(index, 1);

			return {
				...state,
				filter: {
					...state.filter,
					filterBy: filters,
				},
			};
		}
	}

	return state;
};
