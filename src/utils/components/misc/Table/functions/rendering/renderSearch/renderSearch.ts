import { TableState } from '../../../types';
import { isSearchable, search } from '../../searching';

/**
 * A description of `renderSearch()`.
 *
 * @param firstParam - A brief description of firstParam.
 * @param secondParam - [Optional] A brief description of secondParam.
 * @defaultValue - `0`
 *
 * @returns A null value.
 */
export const renderSearch = (state: TableState): TableState => {
	if (isSearchable(state)) {
		const { data, filter } = state;
		const { buffer } = data;
		const { searchBy, searchAgainst } = filter;

		if (buffer !== null && searchAgainst !== null) {
			return {
				...state,
				data: {
					...state.data,
					buffer: search(buffer, searchBy, searchAgainst),
				},
			};
		}
	}

	return state;
};
