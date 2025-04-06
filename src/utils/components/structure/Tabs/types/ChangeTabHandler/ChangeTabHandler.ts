import { ChangeEvent } from 'react';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';

/**
 * A function provided by the `useTabs()` hook that can be used to change the
 * active tab. This handler is passed to the `onChange` prop of the `Tabs`
 * component.
 */
export type ChangeTabHandler = (
	_: ChangeEvent<Record<string, unknown>> | null,
	tab: number,
	tabs?: ReadonlyArray<string> | null,
) => void;

/**
 * Checks that an `unknown` value is a {@link ChangeTabHandler}.
 *
 * Requirements:
 *   - `value` must be a function which does not return a value.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ChangeTabHandler}.
 */
export const isChangeTabHandler = (value: unknown): value is ChangeTabHandler =>
	/**
	 * value
	 */
	isFunction(value) && typeof value() === 'undefined';
