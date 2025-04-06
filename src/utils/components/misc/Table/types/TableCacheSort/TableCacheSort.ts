import { isNonEmptyObject } from '@/utils/functions/check/js/specialized/isNonEmptyObject';
import { SortOrder, SortType, isSortOrder, isSortType } from '../../enums';

/**
 * A configuration object for sorting data.
 */
export interface TableCacheSort extends Readonly<Record<string, unknown>> {
	/**
	 * The type of the most recent sort.
	 */
	readonly active: SortType;

	/**
	 * The order of the most recent sort.
	 */
	readonly direction: SortOrder;
}

/**
 * Checks that an `unknown` value is a {@link TableCacheSort} object.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.active` is required and must be a valid {@link SortType}.
 *   - `value.direction` is required and must be a valid {@link SortOrder}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link TableCacheSort} object.
 */
export const isTableCacheSort = (value: unknown): value is TableCacheSort =>
	/**
	 * value
	 */
	isNonEmptyObject(value) &&
	/**
	 * value.active
	 */
	'active' in value &&
	isSortType(value.active) &&
	/**
	 * value.direction
	 */
	'direction' in value &&
	isSortOrder(value.direction);
