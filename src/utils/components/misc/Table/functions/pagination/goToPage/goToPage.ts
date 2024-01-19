import { isPaginated } from '../isPaginated';
import { TableState } from '../../../types';

/**
 * A description of `goToPage()`.
 *
 * @param newPage - The new page number to update the table state.
 * @param state - The current table state.
 *
 * @returns The updated table state.
 */
export const goToPage = (newPage: number, state: TableState): TableState => {
	if (isPaginated(state)) {
		return {
			...state,
			pagination: {
				...state.pagination,
				currentPage: newPage,
			},
		};
	}

	return state;
};
