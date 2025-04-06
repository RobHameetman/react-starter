import { isString } from '@/utils/functions/check/js/specialized/isString';

/**
 * @TODO
 */
export enum StringEnumValues {
	/**
	 * @TODO
	 */
	This = 'This',

	/**
	 * @TODO
	 */
	That = 'That',
}

/**
 * @TODO
 */
export type StringEnumValue = keyof typeof StringEnumValues;

/**
 * @TODO
 */
export const STRING_ENUM_VALUES = Object.freeze(
	Object.keys(StringEnumValues).filter(isString),
);

/**
 * Checks that an `unknown` value is an {@link StringEnumValue}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link StringEnumValues}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link StringEnumValue}.
 */
export const isStringEnumValue = (value: unknown): value is StringEnumValue =>
	/**
	 * value
	 */
	isString(value) && STRING_ENUM_VALUES.includes(value);
