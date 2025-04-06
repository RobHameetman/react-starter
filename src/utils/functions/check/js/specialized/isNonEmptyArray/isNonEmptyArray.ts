import { isArray } from '@/utils/functions/check/js/core/isArray';

/**
 * Checks that an `unknown` value is a non-empty {@link Array}. This type-guard
 * is used in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be a valid {@link Array} with a length greater than zero.
 *
 * @typeParam T - [Optional] The type of data the array contains. Defaults to `unknown`.
 *
 * @param value - An `unknown` value.
 * @param isT() - [Optional] An additional type-guard to check whether the values in the array are of type `T`.
 *
 * @returns The determination that `value` is or is not a non-empty {@link Array} of type `T`.
 */
export const isNonEmptyArray = <T = unknown>(
	value: unknown,
	isT?: (value: unknown) => value is T,
): value is Array<T> =>
	/**
	 * value
	 */
	isArray<T>(value, isT) && Boolean(value.length);
