import { isPaginated } from '../isPaginated';
import { TableState } from '../../../types';

/**
 * Increment the current table page by 1.
 *
 * @param state - The current table state to update.
 *
 * @returns The updated table state.
 */
export const setPageSize = (
	pageSize: number,
	state: TableState,
): TableState => {
	if (isPaginated(state)) {
		return {
			...state,
			pagination: {
				...state.pagination,
				pageSize,
			},
		};
	}

	return state;
};
