import { isNumber } from '@app/utils/functions/check/js/core/isNumber';

/**
 * Checks that an `unknown` value is a {@link number} greater than zero. This
 * type-guard is used in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be a number which is greater than zero.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link number} greater than zero.
 */
export const isNumberGreaterThanZero = (value: unknown): value is number =>
	/**
	 * value
	 */
	isNumber(value) && value > 0;
