import { isNull } from '@/utils/functions/check/js/core/isNull';
import { isUndefined } from '@/utils/functions/check/js/core/isUndefined';

/**
 * Checks that an `unknown` value is `undefined` or `null`. This type-guard is
 * used in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be `undefined` or `null`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not `undefined` or `null`.
 */
export const isUndefinedOrNull = (value: unknown): value is null | undefined =>
	/**
	 * value
	 */
	isUndefined(value) || isNull(value);
