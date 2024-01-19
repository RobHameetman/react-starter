import { isString } from '@app/utils/functions/check/js/core/isString';

/**
 * A set of standardized interaction intents for components that the user may
 * interact with. This may be used to indicate the success or failure of an
 * interaction.
 */
export enum Intents {
	/**
	 * An element indicating that the user has received an error or that an
	 * interaction was not successful.
	 */
	error = 'error',

	/**
	 * An element indicating that the user has received information.
	 */
	info = 'info',

	/**
	 * An element with no particular indication to the user.
	 */
	none = 'none',

	/**
	 * An element indicating that the user has received a success message or that
	 * an interaction was successful.
	 */
	success = 'success',

	/**
	 * An element indicating that the user has received a warning or that an
	 * interaction was either partially successful or may not completely succeed.
	 */
	warning = 'warning',
}

/**
 * Any one of the above interaction intent types.
 */
export type Intent = keyof typeof Intents;

/**
 * A list of all the above interaction intent types.
 */
export const INTENTS = Object.freeze(Object.keys(Intents).filter(isString));

/**
 * Checks that an `unknown` value is an {@link Intent}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link Intents}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link Intent}.
 */
export const isIntent = (value: unknown): value is Intent =>
	/**
	 * value
	 */
	isString(value) && INTENTS.includes(value);
