import { TableCacheSort, isTableCacheSort } from '../TableCacheSort';
import { SortByOptions, isSortByOptions } from '../SortByOptions';

/**
 * A configuration object for sorting data.
 */
export interface TableStateSort extends TableCacheSort {
	/**
	 * The type of the most recent sort.
	 */
	readonly options: SortByOptions;
}

/**
 * Checks that an `unknown` value is a {@link TableStateSort} object.
 *
 * Requirements:
 *   - `value` must be a valid {@link TableCacheSort}.
 *   - `value.options` is required and must be a valid {@link SortByOptions}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link TableStateSort} object.
 */
export const isTableStateSort = (value: unknown): value is TableStateSort =>
	/**
	 * value
	 */
	isTableCacheSort(value) &&
	/**
	 * value.options
	 */
	'options' in value &&
	isSortByOptions(value.options);
