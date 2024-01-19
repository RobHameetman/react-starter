import { isString } from '@app/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link PointerType} values.
 */
export enum PointerTypes {
	/**
	 * A mouse pointer.
	 */
	mouse = 'mouse',

	/**
	 * A pen/stylus pointer.
	 */
	pen = 'pen',

	/**
	 * A touch pointer.
	 */
	touch = 'touch',
}

/**
 * Any one of the above {@link PointerTypes}.
 */
export type PointerType = keyof typeof PointerTypes;

/**
 * A list of all {@link PointerType} values.
 */
export const POINTER_TYPES = Object.freeze(
	Object.keys(PointerTypes).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link PointerType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link PointerTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link PointerType}.
 */
export const isPointerType = (value: unknown): value is PointerType =>
	/**
	 * value
	 */
	isString(value) && POINTER_TYPES.includes(value);
