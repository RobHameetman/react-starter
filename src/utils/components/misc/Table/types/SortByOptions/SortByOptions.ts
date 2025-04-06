import { isNonEmptyObject } from '@/utils/functions/check/js/specialized/isNonEmptyObject';
import { isSortOption, SortOption } from '../SortOption';
import { SortType, isSortType } from '../../enums';

/**
 * A configuration object for sorting data by field values by {@link SortType}.
 */
export type SortByOptions = {
	readonly [K in SortType]?: SortOption;
};

/**
 * Checks that an `unknown` value is a map of {@link SortByOptions}.
 *
 * Requirements:
 *   - `value` must be a non-empty object with valid {@link SortType}s as keys and
 *     valid {@link SortOption}s as values.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a map of {@link SortByOptions}.
 */
export const isSortByOptions = (value: unknown): value is SortByOptions =>
	/**
	 * value
	 */
	isNonEmptyObject(value) &&
	Object.entries(value).every(
		([key, val]) => isSortType(key) && isSortOption(val),
	);
