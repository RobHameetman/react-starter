import { TableState } from '../../../types';

/**
 * Determine if a given table state has search enabled.
 *
 * @param state - The current table state.
 *
 * @returns A boolean value which is `true` if the table is searchable.
 */
export const isSearchable = (state: TableState): boolean => {
	const { features } = state;
	const { searchable } = features;

	return searchable;
};
