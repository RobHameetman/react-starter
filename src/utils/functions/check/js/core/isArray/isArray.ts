/**
 * Checks that an `unknown` value is an {@link Array}. This type-guard is used
 * in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be an instance of {@link Array}.
 *
 * @typeParam T - [Optional] The type of data the array contains. Defaults to `unknown`.
 *
 * @param value - An `unknown` value.
 * @param isT() - [Optional] An additional type-guard to check whether the values in the array are of type `T`.
 *
 * @returns The determination that `value` is or is not an {@link Array} of type `T`.
 */
export const isArray = <T = unknown>(
	value: unknown,
	isT?: (value: unknown) => value is T,
): value is Array<T> =>
	/**
	 * value
	 */
	value instanceof Array && (isT ? value.every(isT) : true);
