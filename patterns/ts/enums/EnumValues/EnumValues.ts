import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * @TODO
 */
export enum EnumValues {
	/**
	 * @TODO
	 */
	This,

	/**
	 * @TODO
	 */
	That,
}

/**
 * @TODO
 */
export type EnumValue = keyof typeof EnumValues;

/**
 * @TODO
 */
export const ENUM_VALUES = Object.freeze(
	Object.keys(EnumValues).filter(isString),
);

/**
 * Checks that an `unknown` value is an {@link EnumValue}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link EnumValues}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link EnumValue}.
 */
export const isEnumValue = (value: unknown): value is EnumValue =>
	/**
	 * value
	 */
	isString(value) && ENUM_VALUES.includes(value);
