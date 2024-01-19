/**
 * Checks that an `unknown` value is an {@link object}. This type-guard is used
 * in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be of type `'object'`.
 *   - `value` must not be `null`.
 *   - `value` must not be an instance of `{@link Array}`.
 *   - `value` must have values of type `T` if a type-guard is provided.
 *
 * @typeParam T - The type of data the array contains. Defaults to `unknown`.
 *
 * @param value - An `unknown` value.
 * @param isT() - [Optional] An additional type-guard to check whether the values in the object are of type `T`.
 *
 * @returns The determination that `value` is or is not an {@link object} with values of type `T`.
 */
export const isObject = <T = unknown>(
	value: unknown,
	isT?: (value: unknown) => value is T,
): value is Record<string, T> =>
	/**
	 * value
	 */
	typeof value === 'object' &&
	value !== null &&
	!(value instanceof Array) &&
	(isT ? Object.values(value).every(isT) : true);
