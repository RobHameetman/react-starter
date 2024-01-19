import { isLoading } from '../../misc';
import { TableState } from '../../../types';
import { isSearchable } from '../../searching';
import { isFilterable } from '../../filtering';

/**
 * A description of `renderLoading()`.
 *
 * @param firstParam - A brief description of firstParam.
 * @param secondParam - [Optional] A brief description of secondParam.
 * @defaultValue - `0`
 *
 * @returns The updated table state.
 */
export const renderLoading = (state: TableState): TableState => {
	if (isLoading(state)) {
		return {
			...state,
			loading:
				state.columns > 0 &&
				(isSearchable(state) ? state.filter.searchAgainst !== null : true) &&
				(isFilterable(state) ? state.filter.onFilter !== null : true),
		};
	}

	return state;
};
