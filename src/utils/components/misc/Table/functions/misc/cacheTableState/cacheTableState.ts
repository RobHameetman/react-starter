import { TableState } from '../../../types';
import { setCache } from '../../cache/setCache';

/**
 * A description of `cacheTableState()`.
 *
 * @param sortType - The new sort type.
 * @param state - The current table state.
 *
 * @returns The updated table state.
 */
export const cacheTableState = (state: TableState) => {
	const {
		columns: _columns,
		data: _data,
		features: _features,
		filter: _filter,
		loading: _loading,
		sort: _sort,
		...cache
	} = state;

	const {
		onFilter: _onFilter,
		searchAgainst: _searchAgainst,
		...filter
	} = _filter;

	const { options: _options, ...sort } = _sort;

	setCache(cache.name, {
		...cache,
		filter,
		sort,
	});
};
