import { isElement } from '@app/utils/functions/check/dom/isElement';
import { isString } from '@app/utils/functions/check/js/core/isString';
import { isUndefined } from '@app/utils/functions/check/js/core/isUndefined';

/**
 * Checks that an `unknown` value is an {@link HTMLElement}.
 *
 * Requirements:
 *   - `value` must be an instance of {@link HTMLElement}.
 *   - `value.title` is required and must be a string.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link HTMLElement}.
 */
export const isHtmlElement = (value: unknown): value is HTMLElement =>
	/**
	 * value
	 */
	((!isUndefined(window) && value instanceof HTMLElement) ||
		isElement(value)) &&
	/**
	 * value.title
	 */
	'title' in value &&
	isString(value.title);
