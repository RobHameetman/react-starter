/**
 * Checks that an `unknown` value is a {@link number}. This type-guard is used
 * in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be have a type of `'number'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link number}.
 */
export const isNumber = (value: unknown): value is number =>
	/**
	 * value
	 */
	typeof value === 'number';
