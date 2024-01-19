import { isFunction } from '@app/utils/functions/check/js/core/isFunction';
import { isNonEmptyObject } from '@app/utils/functions/check/js/specialized/isNonEmptyObject';
import { SortOrder, isSortOrder } from '../../enums';

/**
 * A configuration object for sorting data by field values.
 */
export interface SortOption {
	/**
	 * A specific sort order which overrides the default sort order of the table.
	 */
	readonly sortOrder?: SortOrder;

	/**
	 * A sorting function used to sort data.
	 */
	readonly sortBy: (...args: ReadonlyArray<unknown>) => void;
}

/**
 * Checks that an `unknown` value is a {@link SortOption}.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.sortOrder` is required and must be a valid `SortOrder`.
 *   - `value.sortBy()` is required and must be a function.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link SortOption}.
 */
export const isSortOption = (value: unknown): value is SortOption =>
	/**
	 * value
	 */
	isNonEmptyObject(value) &&
	/**
	 * value.sortOrder
	 */
	'sortOrder' in value &&
	isSortOrder(value.sortOrder) &&
	/**
	 * value.sortBy()
	 */
	'sortBy' in value &&
	isFunction(value.sortBy);
