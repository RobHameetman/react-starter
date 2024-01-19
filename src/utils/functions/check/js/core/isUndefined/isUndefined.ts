/**
 * Checks that an `unknown` value is `undefined`. This type-guard is used in
 * other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be have a type of `'undefined'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not `undefined`.
 */
export const isUndefined = (value: unknown): value is undefined =>
	/**
	 * value
	 */
	typeof value === 'undefined';
