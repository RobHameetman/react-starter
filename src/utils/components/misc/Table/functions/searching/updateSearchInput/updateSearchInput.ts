import { isSearchable } from '../isSearchable';
import { TableState } from '../../../types';

/**
 * A description of `updateSearchInput()`.
 *
 * @param value - The updated search value.
 * @param state - The current table state.
 *
 * @returns The updated table state.
 */
export const updateSearchInput = (
	value: string,
	state: TableState,
): TableState => {
	if (isSearchable(state)) {
		return {
			...state,
			filter: {
				...state.filter,
				searchBy: value,
			},
		};
	}

	return state;
};
