import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import isUndefined from 'lodash/isUndefined';
import { noop } from '@/utils/functions/misc/noop';

/**
 * A no-op function. No-op functions are useful in cases where a function is
 * optional and a default function can help us reduce bloated logic. A good
 * example is an optional "onClick" handler for a component. If the handler is
 * not provided, we can use a no-op function to avoid having to check if the
 * handler is provided before calling it.
 */
export type Noop = (...args: ReadonlyArray<unknown>) => void;

/**
 * Checks that an `unknown` value is a {@link Noop} function.
 *
 * Requirements:
 *   - `value` must be an function named 'noop' which does not return a value.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Noop} function.
 */
export const isNoop = (value: unknown): value is Noop =>
	/**
	 * value
	 */
	isFunction(value) && value.name === 'noop';
