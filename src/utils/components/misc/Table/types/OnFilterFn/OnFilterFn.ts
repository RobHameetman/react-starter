import { isBoolean } from '@app/utils/functions/check/js/core/isBoolean';
import { isFunction } from '@app/utils/functions/check/js/core/isFunction';

/**
 * A callback triggered when data in the table is filtered.
 *
 * @param data - The data to be filtered.
 * @param selectedFilter - The selected filter type.
 * @param index - The index of the data in the array.
 * @param array - The array of data to be filtered.
 *
 * @returns The determination that `data` should be filtered.
 */
export type OnFilterFn = (
	data: unknown,
	selectedFilter: string,
	index: number,
	array: ReadonlyArray<unknown>,
) => boolean;

/**
 * Checks that an `unknown` value is an {@link OnFilterFn}.
 *
 * Requirements:
 *   - `value()` must be a function which returns a boolean.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link OnFilterFn}.
 */
export const isOnFilterFn = (value: unknown): value is OnFilterFn =>
	/**
	 * value()
	 */
	isFunction(value) && isBoolean(value());
