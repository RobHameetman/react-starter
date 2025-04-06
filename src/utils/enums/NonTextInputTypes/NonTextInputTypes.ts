import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link NonTextInputType} values.
 */
export enum NonTextInputTypes {
	/**
	 * A push button with no default behavior displaying the value of the `value`
	 * attribute, empty by default.
	 */
	button = 'button',

	/**
	 * A check box allowing single values to be selected/deselected.
	 */
	checkbox = 'checkbox',

	/**
	 * A control for specifying a color; opening a color picker when active in
	 * supporting browsers.
	 */
	color = 'color',

	/**
	 * A control that lets the user select a file. Use the `accept` attribute to
	 * define the types of files that the control can select.
	 */
	file = 'file',

	/**
	 * A graphical `submit` button. Displays an image defined by the `src`
	 * attribute. The `alt` attribute displays if the image `src` is missing.
	 */
	image = 'image',

	/**
	 * A radio button, allowing a single value to be selected out of multiple
	 * choices with the same `name` value.
	 */
	radio = 'radio',

	/**
	 * A control for entering a number whose exact value is not important.
	 * Displays as a range widget defaulting to the middle value. Used in
	 * conjunction `min` and `max` to define the range of acceptable values.
	 */
	range = 'range',

	/**
	 * A button that resets the contents of the form to default values. Not
	 * recommended.
	 */
	reset = 'reset',

	/**
	 * A button that submits the form.
	 */
	submit = 'submit',
}

/**
 * Any one of the above {@link NonTextInputTypes}.
 */
export type NonTextInputType = keyof typeof NonTextInputTypes;

/**
 * A list of all {@link NonTextInputType} values.
 */
export const NON_TEXT_INPUT_TYPES = Object.freeze(
	Object.keys(NonTextInputTypes).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link NonTextInputType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link NonTextInputTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link NonTextInputType}.
 */
export const isNonTextInputType = (value: unknown): value is NonTextInputType =>
	/**
	 * value
	 */
	isString(value) && NON_TEXT_INPUT_TYPES.includes(value);
