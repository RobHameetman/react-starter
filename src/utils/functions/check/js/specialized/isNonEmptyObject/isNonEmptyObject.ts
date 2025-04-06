import { isObject } from '@/utils/functions/check/js/core/isObject';

/**
 * Checks that an `unknown` value is a non-empty {@link object}. This type-guard
 * is used in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be a valid {@link object} with a number of keys greater than zero.
 *
 * @typeParam T - [Optional] The type of data the object contains. Defaults to `unknown`.
 *
 * @param value - An `unknown` value.
 * @param isT() - [Optional] An additional type-guard to check whether the values in the object are of type `T`.
 *
 * @returns The determination that `value` is or is not a non-empty {@link object} with values of type `T`.
 */
export const isNonEmptyObject = <T = unknown>(
	value: unknown,
	isT?: (value: unknown) => value is T,
): value is Record<string, T> =>
	/**
	 * value
	 */
	isObject<T>(value, isT) && Boolean(Object.keys(value).length);
