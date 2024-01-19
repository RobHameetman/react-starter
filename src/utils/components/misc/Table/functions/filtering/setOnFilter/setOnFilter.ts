import { isFilterable } from '../isFilterable';
import { OnFilterFn, TableState } from '../../../types';

/**
 * Set the current onFilter function.
 *
 * @param onFilter - The onFilter function to use for the current filter. This
 * function should return a boolean value.
 * @param state - The current table state.
 *
 * @returns The updated table state.
 */
export const setOnFilter = (
	onFilter: OnFilterFn,
	state: TableState,
): TableState => {
	if (isFilterable(state)) {
		return {
			...state,
			filter: {
				...state.filter,
				onFilter,
			},
		};
	}

	return state;
};
