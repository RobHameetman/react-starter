import { isNumber } from '@app/utils/functions/check/js/core/isNumber';
import { isString } from '@app/utils/functions/check/js/core/isString';

/**
 * Checks that an `unknown` value is a valid {@link Date} input. This type-guard
 * is used in other type-guards to keep them readable. The {@link Date}
 * constructor requires a parsable string, a number which represents the number
 * of milliseconds since 01/01/1970 at 12:00am, or another Date instance.
 *
 * Requirements:
 *   - `value` must be a {@link string} or {@link number} or an instance of {@link Date}.
 *
 * @typeParam T - [Optional] A specific type of date input. Defaults to `string | number | Date`.
 *
 * @param value - An `unknown` value.
 * @param isT() - [Optional] An additional type-guard to check whether the values in the array are of type `T`.
 *
 * @returns The determination that `value` is or is not a {@link Date} input of type `T`.
 */
export const isDateInput = <
	T extends string | number | Date = string | number | Date,
>(
	value: unknown,
	isT?: (value: unknown) => value is T,
): value is T =>
	/**
	 * value
	 */
	isT
		? isT(value)
		: isString(value) || isNumber(value) || value instanceof Date;
