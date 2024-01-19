import { isArray } from '@app/utils/functions/check/js/core/isArray';
import { isString } from '@app/utils/functions/check/js/core/isString';
import { isNonEmptyObject } from '@app/utils/functions/check/js/specialized/isNonEmptyObject';

/**
 * A configuration object for filtering data.
 */
export interface TableCacheFilter extends Record<string, unknown> {
	/**
	 * A filter type used for additional filtering.
	 */
	readonly filterBy: ReadonlyArray<string>;

	/**
	 * The search value to be filtered.
	 */
	readonly searchBy: string;
}

/**
 * Checks that an `unknown` value is a {@link TableCacheFilter} object.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.filterBy` is required and must be an array of strings.
 *   - `value.searchBy` is required and must be a string.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link TableCacheFilter} object.
 */
export const isTableCacheFilter = (value: unknown): value is TableCacheFilter =>
	/**
	 * value
	 */
	isNonEmptyObject(value) &&
	/**
	 * value.filterBy
	 */
	'filterBy' in value &&
	isArray(value.filterBy) &&
	value.filterBy.every(isString) &&
	/**
	 * value.searchBy
	 */
	'searchBy' in value &&
	isString(value.searchBy);
