import { TableState } from '../../../types';

/**
 * Determine if a given table state is currently loading.
 *
 * @param state - The current table state.
 *
 * @returns A boolean value which is `true` if the table is loading.
 */
export const isLoading = (state: TableState): boolean => {
	const { loading } = state;

	return loading;
};
