import { MouseEvent } from 'react';
import { isVoidFunction } from '@app/utils/functions/check/js/specialized/isVoidFunction';

/**
 * A function provided by the `useTabs()` hook to pass into a tab's `onClick`
 * attribute.
 *
 * @param e - The {@link MouseEvent} that triggered the callback.
 * @param page - The page number to change to.
 */
export type ChangePageHandler = (
	e: MouseEvent<HTMLButtonElement> | null,
	page: number,
) => void;

/**
 * Checks that an `unknown` value is a {@link ChangePageHandler} function.
 *
 * Requirements:
 *   - `value` must be a function which does not return a value.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ChangePageHandler} function.
 */
export const isChangePageHandler = (
	value: unknown,
): value is ChangePageHandler =>
	/**
	 * value
	 */
	isVoidFunction(value);
