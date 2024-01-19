/**
 * Checks that an `unknown` value is a {@link string}. This type-guard is used
 * in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be have a type of `'string'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link string}.
 */
export const isString = (value: unknown): value is string =>
	/**
	 * value
	 */
	typeof value === 'string';
