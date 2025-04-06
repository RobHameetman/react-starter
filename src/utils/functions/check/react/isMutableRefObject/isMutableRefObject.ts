import { MutableRefObject } from 'react';
import { isNonEmptyObject } from '@/utils/functions/check/js/specialized/isNonEmptyObject';

/**
 * Checks that an `unknown` value is a {@link MutableRefObject}.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.current` is required and must be a non-empty object or `null`.
 *
 * @typeParam T - [Optional] The type of data the ref contains. Defaults to `unknown`.
 *
 * @param value - An `unknown` value.
 * @param isT() - [Optional] An additional type-guard to check whether the value of the ref is of type `T`.
 *
 * @returns The determination that `value` is or is not a {@link MutableRefObject}.
 */
export const isMutableRefObject = <T = unknown>(
	value: unknown,
	isT?: (value: unknown) => value is T,
): value is MutableRefObject<T | null> =>
	/**
	 * value
	 */
	isNonEmptyObject(value) &&
	/**
	 * value.current
	 */
	'current' in value &&
	((isT ? isT(value.current) : true) || value.current === null);
