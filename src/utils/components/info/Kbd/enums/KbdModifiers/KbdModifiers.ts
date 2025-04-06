import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * @TODO
 */
export enum KbdModifiers {
	/**
	 * @TODO
	 */
	Command = 'command',

	/**
	 * @TODO
	 */
	Shift = 'shift',

	/**
	 * @TODO
	 */
	Ctrl = 'ctrl',

	/**
	 * @TODO
	 */
	Option = 'option',

	/**
	 * @TODO
	 */
	Enter = 'enter',

	/**
	 * @TODO
	 */
	Delete = 'delete',

	/**
	 * @TODO
	 */
	Escape = 'escape',

	/**
	 * @TODO
	 */
	Tab = 'tab',

	/**
	 * @TODO
	 */
	Capslock = 'capslock',

	/**
	 * @TODO
	 */
	Up = 'up',

	/**
	 * @TODO
	 */
	Right = 'right',

	/**
	 * @TODO
	 */
	Down = 'down',

	/**
	 * @TODO
	 */
	Left = 'left',

	/**
	 * @TODO
	 */
	Pageup = 'pageup',

	/**
	 * @TODO
	 */
	Pagedown = 'pagedown',

	/**
	 * @TODO
	 */
	Home = 'home',

	/**
	 * @TODO
	 */
	End = 'end',

	/**
	 * @TODO
	 */
	Help = 'help',

	/**
	 * @TODO
	 */
	Space = 'space',
}

/**
 * @TODO
 */
export type KbdModifier = `${KbdModifiers}`;

/**
 * @TODO
 */
export const KBD_MODIFIERS =
	Object.values<string>(KbdModifiers).filter(isString);

/**
 * Checks that an `unknown` value is an {@link KbdModifier}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link KbdModifiers}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link KbdModifier}.
 */
export const isKbdModifier = (value: unknown): value is KbdModifier =>
	/**
	 * value
	 */
	isString(value) && KBD_MODIFIERS.includes(value);
