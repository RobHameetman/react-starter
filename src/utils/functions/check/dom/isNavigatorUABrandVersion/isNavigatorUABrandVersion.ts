import { isObject } from '@/utils/functions/check/js/core/isObject';
import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * Checks that an `unknown` value is a {@link NavigatorUABrandVersion}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.brand` is required and must be a string shorter than 32 characters.
 *   - `value.version` is required and must be a string.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link NavigatorUABrandVersion}.
 */
export const isNavigatorUABrandVersion = (
	value: unknown,
): value is NavigatorUABrandVersion =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.brand
	 */
	'brand' in value &&
	isString(value.brand) &&
	value.brand.length < 32 &&
	/**
	 * value.version
	 */
	'version' in value &&
	isString(value.version);
