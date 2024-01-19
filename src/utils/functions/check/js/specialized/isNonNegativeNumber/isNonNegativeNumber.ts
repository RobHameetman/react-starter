import { isNumber } from '@app/utils/functions/check/js/core/isNumber';

/**
 * Checks that an `unknown` value is a non-negative {@link number}. This
 * type-guard is used in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be a number which is greater than or equal to zero.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a non-negative {@link number}.
 */
export const isNonNegativeNumber = (value: unknown): value is number =>
	/**
	 * value
	 */
	isNumber(value) && value >= 0;
