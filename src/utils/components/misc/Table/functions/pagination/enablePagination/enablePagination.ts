import { isPaginated } from '../isPaginated';
import { TableState } from '../../../types';

/**
 * Enable data pagination or virtual scrolling in the table.
 *
 * @param state - The current table state.
 * @param virtual - [Optional] Enable virtual scrolling.
 *
 * @returns The updated table state.
 */
export const enablePagination = (
	state: TableState,
	virtual = false,
): TableState => {
	if (!isPaginated(state)) {
		return {
			...state,
			features: {
				...state.features,
				paginated: true,
				virtual,
			},
		};
	}

	return state;
};
