import { TableState } from '../../../types';

/**
 * Determine if a given table state has filtering enabled.
 *
 * @param state - The current table state.
 *
 * @returns A boolean value which is `true` if the table is filterable.
 */
export const isFilterable = (state: TableState): boolean => {
	const { features } = state;
	const { filterable } = features;

	return filterable;
};
