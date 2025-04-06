import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * @TODO
 */
export type HandlerPropName = `on${Capitalize<string>}`;

/**
 * Checks that an `unknown` value is a {@link HandlerPropName}.
 *
 * Requirements:
 *   - `value` must be a string which starts with `'on'` followed by a capital letter.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link HandlerPropName}.
 */
export const isHandlerPropName = (value: unknown): value is HandlerPropName =>
	/**
	 * value
	 */
	isString(value) && value.startsWith('on') && /[A-Z]/.test(value.charAt(2));
