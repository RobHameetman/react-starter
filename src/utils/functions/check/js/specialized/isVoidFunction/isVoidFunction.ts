import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { isUndefined } from '@/utils/functions/check/js/core/isUndefined';

/**
 * Checks that an `unknown` value is a function which does not return a value.
 * This type-guard is used in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be of type `'function'`.
 *   - `value()` must take arguments type `T` if a type-guard for type `T` is provided.
 *   - `value()` must never return a value.
 *
 * @privateRemarks
 * I have a package for these that I use normally but I ran into an issue where
 * two files were not being transpiled correctly and others were. Super weird
 * error but I decided for the sake of time to just copy these type guards here.
 *
 * @typeParam T - [Optional] The type of data the function takes as arguments. Defaults to `unknown`.
 *
 * @param value - An `unknown` value.
 * @param args - [Optional] An array of arguments passed in with an additional type-guard.
 * @param isT() - [Optional] An additional type-guard to check whether the arguments of the function are of type `T`.
 *
 * @returns The determination that `value` is or is not a function which does not return a value.
 */
export const isVoidFunction = <T = unknown>(
	value: unknown,
	args: ReadonlyArray<unknown> = [],
	isT?: (value: unknown) => value is T,
): value is (...args: ReadonlyArray<T>) => void =>
	/**
	 * value
	 */
	isFunction(value) &&
	(isT ? args.every(isT) : true) &&
	isUndefined(args.length ? value(...args) : undefined);
