import { isFunction } from '@app/utils/functions/check/js/core/isFunction';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isUndefined } from '@app/utils/functions/check/js/core/isUndefined';

/**
 * Checks that an `unknown` value is an {@link EventTarget} node.
 *
 * Requirements:
 *   - `value` must be an instance of `EventTarget` if `window` is defined or an object if `window` is `undefined`.
 *   - `value.addEventListener()` must be a function if `window` is `undefined`.
 *   - `value.dispatchEvent()` must be a function if `window` is `undefined`.
 *   - `value.removeEventListener()` must be a function if `window` is `undefined`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link EventTarget} node.
 */
export const isEventTarget = (value: unknown): value is EventTarget =>
	/**
	 * value
	 */
	!isUndefined(window)
		? value instanceof EventTarget
		: isObject(value) &&
		  /**
		   * value.addEventListener()
		   */
		  'addEventListener' in value &&
		  isFunction(value.addEventListener) &&
		  /**
		   * value.dispatchEvent()
		   */
		  'dispatchEvent' in value &&
		  isFunction(value.dispatchEvent) &&
		  /**
		   * value.removeEventListener()
		   */
		  'removeEventListener' in value &&
		  isFunction(value.removeEventListener);
