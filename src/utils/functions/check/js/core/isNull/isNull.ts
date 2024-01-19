/**
 * Checks that an `unknown` value is `null`. This type-guard is used in other
 * type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be have a type of `'null'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not `null`.
 */
export const isNull = (value: unknown): value is null =>
	/**
	 * value
	 */
	value === null;
