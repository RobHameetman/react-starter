import { isFunction } from '@/utils/functions/check/js/core/isFunction';

/**
 * A type shorthand for an unknown function, used to avoid the {@link Function}
 * type, which is an anti-pattern in TypeScript.
 */
export type Func = (...args: ReadonlyArray<unknown>) => unknown;

/**
 * Checks that an `unknown` value is a {@link Func}.
 *
 * Requirements:
 *   - `value` must be a function.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Func}.
 */
export const isFunc = (value: unknown): value is Func =>
	/**
	 * value
	 */
	isFunction(value);
