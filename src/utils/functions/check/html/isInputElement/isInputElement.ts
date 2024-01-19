import { isHtmlElement } from '@app/utils/functions/check/html/isHtmlElement';
import { isUndefined } from '@app/utils/functions/check/js/core/isUndefined';

/**
 * Checks that an `unknown` value is an {@link HTMLInputElement}.
 *
 * Requirements:
 *   - `value` must be an instance of {@link HTMLInputElement}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link HTMLInputElement}.
 */
export const isInputElement = (value: unknown): value is HTMLInputElement =>
	/**
	 * value
	 */
	(!isUndefined(window) && value instanceof HTMLInputElement) ||
	(isHtmlElement(value) &&
		/**
		 * value.tagName
		 */
		value.tagName === 'INPUT');
