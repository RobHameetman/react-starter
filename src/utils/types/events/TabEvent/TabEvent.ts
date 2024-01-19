import { KeyboardEvent } from 'react';
import { isKeyboardEvent } from '@app/utils/functions/check/react/isKeyboardEvent';

/**
 * A compositional event type for React components that allow you to trigger an
 * action when the 'Tab' key is pressed.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type TabEvent<T = Element> = KeyboardEvent<T>;

/**
 * Checks that an `unknown` value is a {@link TabEvent}.
 *
 * Requirements:
 *   - `value` must be a valid {@link KeyboardEvent}.
 *   - `value.code` is required and must be the string `'Tab'`.
 *   - `value.key` is required and must be the string `'Tab'`.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link TabEvent}.
 */
export const isTabEvent = <T = Element>(value: unknown): value is TabEvent<T> =>
	/**
	 * value
	 */
	isKeyboardEvent(value) &&
	/**
	 * value.code
	 */
	'code' in value &&
	value.code === 'Tab' &&
	/**
	 * value.key
	 */
	'key' in value &&
	value.key === 'Tab';
