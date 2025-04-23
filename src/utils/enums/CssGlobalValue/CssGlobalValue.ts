import { isString } from '@/utils/functions/check/js/core/isString';

/**
 * A list of all possible {@link CssGlobalValue} values.
 */
export enum CssGlobalValue {
	/**
	 * Specifies that all the element's properties should be changed to their
	 * inherited values.
	 */
	inherit = 'inherit',

	/**
	 * Specifies that all the element's properties should be changed to their
	 * initial values.
	 */
	initial = 'initial',

	/**
	 * Specifies behavior that depends on the stylesheet origin to which the
	 * declaration belongs.
	 */
	revert = 'revert',

	/**
	 * Specifies that all the element's properties should roll back the cascade to
	 * a previous cascade layer, if one exists. If no other cascade layer exists,
	 * the element's properties will roll back to the matching rule, if one
	 * exists, in the current layer or to a previous style origin.
	 */
	['revert-layer'] = 'revert-layer',

	/**
	 * Specifies that all the element's properties should be changed to their
	 * inherited values if they inherit by default, or to their initial values if
	 * not.
	 */
	unset = 'unset',
}

/**
 * Any one of the above {@link CssGlobalValues}.
 */
export type AnyCssGlobalValue = `${CssGlobalValue}`;

/**
 * A list of all {@link CssGlobalValue} values.
 */
export const CSS_GLOBAL_VALUES = Object.freeze(
	Object.keys(CssGlobalValue).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link CssGlobalValue}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link CssGlobalValue}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link CssGlobalValue}.
 */
export const isCssGlobalValue = (
	value: unknown,
): value is CssGlobalValue =>
	/**
	 * value
	 */
	isString(value) && CSS_GLOBAL_VALUES.includes(value);
