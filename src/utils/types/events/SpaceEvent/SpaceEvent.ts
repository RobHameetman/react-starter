import { KeyboardEvent, PointerEvent } from 'react';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isKeyboardEvent } from '@app/utils/functions/check/react/isKeyboardEvent';

/**
 * A compositional event type for React components that allow you to trigger an
 * action when the 'Space' key is pressed.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 */
export type SpaceEvent<T = Element> = KeyboardEvent<T>;

/**
 * Checks that an `unknown` value is a {@link SpaceEvent}.
 *
 * Requirements:
 *   - `value` must be a valid {@link KeyboardEvent}.
 *   - `value.code` is required and must be the string `'Space'`.
 *   - `value.key` is required and must be the string `' '`.
 *
 * @typeParam T - The type of HTML element that will be the target of the event.
 * Defaults to type {@link Element}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link SpaceEvent}.
 */
export const isSpaceEvent = <T = Element>(
	value: unknown,
): value is SpaceEvent<T> =>
	/**
	 * value
	 */
	isKeyboardEvent(value) &&
	/**
	 * value.code
	 */
	'code' in value &&
	value.code === 'Space' &&
	/**
	 * value.key
	 */
	'key' in value &&
	value.key === ' ';
