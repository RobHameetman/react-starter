import { TableState } from '../../../types';

/**
 * Determine if a given table state has pagination or virtual scrolling enabled.
 *
 * @param state - The current table state.
 *
 * @returns A boolean value which is `true` if the table is paginated.
 */
export const isPaginated = (state: TableState): boolean => {
	const { features } = state;
	const { paginated, virtual } = features;

	return virtual || paginated;
};
