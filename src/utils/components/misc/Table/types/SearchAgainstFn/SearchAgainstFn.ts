import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * A callback triggered when the user filters data by a search value.
 *
 * @param data - The data to be filtered.
 *
 * @returns The search value used for filtering.
 */
export type SearchAgainstFn = (data: unknown) => string;

/**
 * Checks that an `unknown` value is a {@link SearchAgainstFn}.
 *
 * Requirements:
 *   - `value()` must be a function which returns a string.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link SearchAgainstFn}.
 */
export const isSearchAgainstFn = (value: unknown): value is SearchAgainstFn =>
	/**
	 * value()
	 */
	isFunction(value) && isString(value());
