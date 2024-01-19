import { isString } from '@app/utils/functions/check/js/core/isString';
import { isNonEmptyString } from '@app/utils/functions/check/js/specialized/isNonEmptyString';

/**
 * A set of predefined sizes for components. This is used in the `Sizable`
 * compositional prop type.
 */
export enum Sizes {
	/**
	 * Extra small.
	 */
	xs = 'xs',

	/**
	 * Small.
	 */
	sm = 'sm',

	/**
	 * Medium.
	 */
	md = 'md',

	/**
	 * Large.
	 */
	lg = 'lg',

	/**
	 * Extra large.
	 */
	xl = 'xl',
}

/**
 * Any one of the above {@link Sizes}.
 */
export type Size = keyof typeof Sizes;

/**
 * A list of all {@link Size} values.
 */
export const SIZES = Object.freeze(Object.keys(Sizes).filter(isString));

/**
 * Checks that an `unknown` value is a {@link Size}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link Sizes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Size}.
 */
export const isSize = (value: unknown): value is Size =>
	/**
	 * value
	 */
	isNonEmptyString(value) && SIZES.includes(value);
