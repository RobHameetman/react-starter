import { isHtmlElement } from '@/utils/functions/check/html/isHtmlElement';
import { isUndefined } from '@/utils/functions/check/js/core/isUndefined';

/**
 * Checks that an `unknown` value is an {@link HTMLAnchorElement}.
 *
 * Requirements:
 *   - `value` must be an instance of {@link HTMLAnchorElement}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link HTMLAnchorElement}.
 */
export const isAnchorElement = (value: unknown): value is HTMLAnchorElement =>
	/**
	 * value
	 */
	(!isUndefined(window) && value instanceof HTMLAnchorElement) ||
	(isHtmlElement(value) &&
		/**
		 * value.tagName
		 */
		value.tagName === 'A');
