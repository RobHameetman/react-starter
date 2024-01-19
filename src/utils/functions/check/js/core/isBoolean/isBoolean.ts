/**
 * Checks that an `unknown` value is a {@link boolean}. This type-guard is used
 * in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be have a type of `'boolean'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link boolean}.
 */
export const isBoolean = (value: unknown): value is boolean =>
	/**
	 * value
	 */
	typeof value === 'boolean';
