/* eslint-disable max-params */

/**
 * Checks that an `unknown` value is a function. This type-guard is used in
 * other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be of type `'function'`.
 *   - `value` must return a value of type `T` if a type-guard for type `T` is provided.
 *   - `value` must take arguments type `U` if a type-guard for type `U` is provided.
 *
 * @typeParam T - [Optional] The type of data the function returns. Defaults to type `unknown`.
 * @typeParam U - [Optional] The type of data the function takes as arguments. Defaults to `unknown`.
 *
 * @param value - An `unknown` value.
 * @param args - [Optional] An array of arguments passed in with an additional type-guard.
 * @param isT() - [Optional] An additional type-guard to check whether the return value is of type `T`.
 * @param isU() - [Optional] An additional type-guard to check whether the arguments are of type `U`.
 *
 * @returns The determination that `value` is or is not a function.
 */
export const isFunction = <T = unknown, U = unknown>(
	value: unknown,
	args: ReadonlyArray<U> = [],
	isT?: (value: unknown) => value is T,
	isU?: (value: unknown) => value is U,
): value is (...args: ReadonlyArray<U>) => T =>
	/**
	 * value
	 */
	typeof value === 'function' &&
	(isT ? isT(value(...args)) : true) &&
	(isU ? args.every(isU) : true);
