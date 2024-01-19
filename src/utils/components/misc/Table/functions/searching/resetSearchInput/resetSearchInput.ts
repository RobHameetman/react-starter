import { isSearchable } from '../isSearchable';
import { TableState } from '../../../types';

/**
 * A description of `resetSearchInput()`.
 *
 * @param state - The current table state.
 *
 * @returns The updated table state.
 */
export const resetSearchInput = (state: TableState): TableState => {
	if (isSearchable(state)) {
		const { filter } = state;
		const { searchBy } = filter;

		if (searchBy) {
			return {
				...state,
				filter: {
					...state.filter,
					searchBy: '',
				},
			};
		}
	}

	return state;
};
