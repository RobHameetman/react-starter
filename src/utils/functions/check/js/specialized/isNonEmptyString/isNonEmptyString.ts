import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * Checks that an `unknown` value is a non-empty {@link string}. This type-guard
 * is used in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be a string with a length greater than zero.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a non-empty {@link string}.
 */
export const isNonEmptyString = (value: unknown): value is string =>
	/**
	 * value
	 */
	isString(value) && Boolean(value.length);
