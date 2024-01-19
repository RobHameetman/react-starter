import { TableState } from '../../../types';
import { goToPage } from '../goToPage';

/**
 * Decrement the current table page by 1.
 *
 * @param state - The current table state to update.
 *
 * @returns The updated table state.
 */
export const prevPage = (state: TableState): TableState => {
	const { pagination } = state;
	const { currentPage } = pagination;

	return goToPage(currentPage - 1, state);
};
