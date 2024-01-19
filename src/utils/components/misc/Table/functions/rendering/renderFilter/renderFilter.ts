import { filter, isFilterable } from '../../filtering';
import { TableState } from '../../../types';

/**
 * A description of `renderFilter()`.
 *
 * @param firstParam - A brief description of firstParam.
 * @param secondParam - [Optional] A brief description of secondParam.
 * @defaultValue - `0`
 *
 * @returns The updated table state.
 */
export const renderFilter = (state: TableState): TableState => {
	if (isFilterable(state)) {
		const { data, filter: _filter } = state;
		const { buffer } = data;
		const { filterBy, onFilter } = _filter;

		if (buffer !== null && onFilter !== null) {
			return {
				...state,
				data: {
					...state.data,
					buffer: filter(buffer, filterBy, onFilter),
				},
			};
		}
	}

	return state;
};
