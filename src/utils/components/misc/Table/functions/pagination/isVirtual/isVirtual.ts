import { TableState } from '../../../types';

/**
 * Determine if a given table state has virtual scrolling enabled.
 *
 * @param state - The current table state.
 *
 * @returns A boolean value which is `true` if the table has virtual scrolling.
 */
export const isVirtual = (state: TableState): boolean => {
	const { features } = state;
	const { virtual } = features;

	return virtual;
};
