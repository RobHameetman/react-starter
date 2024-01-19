import { isString } from '@app/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link KeyboardEventType} values.
 */
export enum KeyboardEventTypes {
	/**
	 * The 'keydown' event is fired when a key is pressed.
	 */
	keydown = 'keydown',

	/**
	 * The 'keyup' event is fired when a key is released.
	 */
	keyup = 'keyup',
}

/**
 * Any one of the above {@link KeyboardEventTypes}.
 */
export type KeyboardEventType = keyof typeof KeyboardEventTypes;

/**
 * A list of all {@link KeyboardEventType} values.
 */
export const KEYBOARD_EVENT_TYPES = Object.freeze(
	Object.keys(KeyboardEventTypes).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link KeyboardEventType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link KeyboardEventTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link KeyboardEventType}.
 */
export const isKeyboardEventType = (
	value: unknown,
): value is KeyboardEventType =>
	/**
	 * value
	 */
	isString(value) && KEYBOARD_EVENT_TYPES.includes(value);
