import { isSearchable } from '../isSearchable';
import { TableState } from '../../../types';

/**
 * Enable filtering of data displayed in the table from the search bar.
 *
 * @param state - The current table state.
 *
 * @returns The updated table state.
 */
export const enableSearching = (state: TableState): TableState => {
	if (!isSearchable(state)) {
		return {
			...state,
			features: {
				...state.features,
				searchable: true,
			},
		};
	}

	return state;
};
