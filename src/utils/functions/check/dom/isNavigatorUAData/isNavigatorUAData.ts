import { isBoolean } from '@app/utils/functions/check/js/core/isBoolean';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isString } from '@app/utils/functions/check/js/core/isString';
import { isUndefined } from '@app/utils/functions/check/js/core/isUndefined';
import { areNavigatorUABrandVersions } from '../areNavigatorUABrandVersions';

/**
 * Checks that an `unknown` value is a {@link NavigatorUAData}.
 *
 * Requirements:
 *   - `value` must be an instance of `NavigatorUAData` if supported or an object.
 *   - `value.brands` is required and must be an array of valid `NavigatorUABrandVersions`.
 *   - `value.mobile` is required and must be a boolean.
 *   - `value.platform` is required and must be a string.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link NavigatorUAData}.
 */
export const isNavigatorUAData = (value: unknown): value is NavigatorUAData =>
	/**
	 * value
	 */
	!isUndefined(window) &&
	'NavigatorUAData' in window &&
	!isUndefined(window.NavigatorUAData)
		? value instanceof NavigatorUAData
		: isObject(value) &&
		  /**
		   * value.brands
		   */
		  'brands' in value &&
		  areNavigatorUABrandVersions(value.brands) &&
		  /**
		   * value.mobile
		   */
		  'mobile' in value &&
		  isBoolean(value.mobile) &&
		  /**
		   * value.platform
		   */
		  'platform' in value &&
		  isString(value.platform);
