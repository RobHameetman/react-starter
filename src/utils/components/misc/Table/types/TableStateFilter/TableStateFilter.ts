import { isFunction } from '@app/utils/functions/check/js/core/isFunction';
import { OnFilterFn } from '../OnFilterFn';
import { SearchAgainstFn } from '../SearchAgainstFn';
import { TableCacheFilter, isTableCacheFilter } from '../TableCacheFilter';

/**
 * A configuration object for filtering data.
 */
export interface TableStateFilter extends TableCacheFilter {
	/**
	 * A filter type used for additional filtering.
	 */
	readonly onFilter: OnFilterFn | null;

	/**
	 * The search value to be filtered.
	 */
	readonly searchAgainst: SearchAgainstFn | null;
}

/**
 * Checks that an `unknown` value is a {@link TableStateFilter} object.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.onFilter()` is required and must be a function or `null`.
 *   - `value.searchAgainst()` is required and must be a function or `null`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link TableStateFilter} object.
 */
export const isTableStateFilter = (value: unknown): value is TableStateFilter =>
	/**
	 * value
	 */
	isTableCacheFilter(value) &&
	/**
	 * value.onFilter()
	 */
	'onFilter' in value &&
	(isFunction(value.onFilter) || value.onFilter === null) &&
	/**
	 * value.searchAgainst()
	 */
	'searchAgainst' in value &&
	(isFunction(value.searchAgainst) || value.searchAgainst === null);
