import { isSearchable } from '../isSearchable';
import { SearchAgainstFn, TableState } from '../../../types';

/**
 * A description of `setSearchAgainst()`.
 *
 * @param state - The current table state.
 *
 * @returns The updated table state.
 */
export const setSearchAgainst = (
	searchAgainst: SearchAgainstFn,
	state: TableState,
): TableState => {
	if (isSearchable(state)) {
		return {
			...state,
			filter: {
				...state.filter,
				searchAgainst,
			},
		};
	}

	return state;
};
