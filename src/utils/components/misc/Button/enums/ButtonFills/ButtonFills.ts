import { isNonEmptyString } from '@/utils/functions/check/js/specialized/isNonEmptyString';

/**
 * A set of styles for the `<Button />` component.
 */
export enum ButtonFills {
	/**
	 * A button with a filled background.
	 */
	filled = 'filled',

	/**
	 * A button with an outlined border.
	 */
	outlined = 'outlined',

	/**
	 * A button with a transparent background.
	 */
	transparent = 'transparent',
}

/**
 * Any one of the above fills for the `<Button />` component.
 */
export type ButtonFill = keyof typeof ButtonFills;

/**
 * A list of all the above fills for the `<Button />` component.
 */
export const BUTTON_FILLS = Object.keys(ButtonFills).filter(
	(key) => typeof key === 'string',
);

/**
 * Checks that an `unknown` value is a {@link ButtonFill}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link ButtonFills}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ButtonFill}.
 */
export const isButtonFill = (value: unknown): value is ButtonFill =>
	/**
	 * value
	 */
	isNonEmptyString(value) && BUTTON_FILLS.includes(value);
