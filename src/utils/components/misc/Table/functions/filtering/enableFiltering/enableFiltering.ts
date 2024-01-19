import { isFilterable } from '../isFilterable';
import { TableState } from '../../../types';

/**
 * Enable filtering of data displayed in the table from the list of filters.
 *
 * @param state - The current table state.
 *
 * @returns The updated table state.
 */
export const enableFiltering = (state: TableState): TableState => {
	if (!isFilterable(state)) {
		return {
			...state,
			features: {
				...state.features,
				filterable: true,
			},
		};
	}

	return state;
};
