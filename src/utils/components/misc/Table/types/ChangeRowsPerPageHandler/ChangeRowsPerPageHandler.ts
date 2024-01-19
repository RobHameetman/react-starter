import { ChangeEvent } from 'react';
import { isVoidFunction } from '@app/utils/functions/check/js/specialized/isVoidFunction';

/**
 * A function provided by the `useTabs()` hook to pass into a tab's `onClick`
 * attribute.
 *
 * @param e - The {@link ChangeEvent} that triggered the callback.
 */
export type ChangeRowsPerPageHandler = (
	e: ChangeEvent<HTMLInputElement>,
) => void;

/**
 * Checks that an `unknown` value is a {@link ChangeRowsPerPageHandler} function.
 *
 * Requirements:
 *   - `value` must be a function which does not return a value.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ChangeRowsPerPageHandler} function.
 */
export const isChangeRowsPerPageHandler = (
	value: unknown,
): value is ChangeRowsPerPageHandler =>
	/**
	 * value
	 */
	isVoidFunction(value);
