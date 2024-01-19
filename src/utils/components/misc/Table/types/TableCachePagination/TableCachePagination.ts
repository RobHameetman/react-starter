import { isNumberGreaterThanZero } from '@app/utils/functions/check/js/specialized/isNumberGreaterThanZero';
import { isNonEmptyObject } from '@app/utils/functions/check/js/specialized/isNonEmptyObject';

/**
 * A configuration object for paginating data.
 */
export interface TableCachePagination {
	/**
	 * The total number of row items in the table.
	 */
	readonly count: number;

	/**
	 * The page currently selected.
	 */
	readonly currentPage: number;

	/**
	 * The number of items on each page.
	 */
	readonly pageSize: number;
}

/**
 * Checks that an `unknown` value is a {@link TableCachePagination} object.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.count` is required and must be a number greater than zero.
 *   - `value.currentPage` is required and must be a number greater than zero.
 *   - `value.pageSize` is required and must be a number greater than zero.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link TableCachePagination} object.
 */
export const isTableCachePagination = (
	value: unknown,
): value is TableCachePagination =>
	/**
	 * value
	 */
	isNonEmptyObject(value) &&
	/**
	 * value.count
	 */
	'count' in value &&
	isNumberGreaterThanZero(value.count) &&
	/**
	 * value.currentPage
	 */
	'currentPage' in value &&
	isNumberGreaterThanZero(value.currentPage) &&
	/**
	 * value.pageSize
	 */
	'pageSize' in value &&
	isNumberGreaterThanZero(value.pageSize);
