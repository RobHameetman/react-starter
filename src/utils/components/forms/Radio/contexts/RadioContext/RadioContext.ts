import { createContext } from 'react';
import { isFunction } from '@app/utils/functions/check/js/core/isFunction';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { noop } from '@app/utils/functions/misc/noop';

/**
 * A shared state for radio button groups.
 */
export interface RadioContext {
	/**
	 * Retrieve the list of values for the radio button group as a string.
	 * @defaultValue - A no-op function.
	 */
	readonly getGroupValue: () => string | null;

	/**
	 * Check if a value is the selected radio button value.
	 * @defaultValue - A no-op function.
	 */
	readonly groupValueIs: (potentialValue: string) => boolean;

	/**
	 * Remove a value from the list of selected radio button values.
	 * @defaultValue - A no-op function.
	 */
	readonly setGroupValue: (
		value: string | ((currentValue: string) => string),
	) => void;
}

/**
 * {@link RadioContext} default values.
 */
export const INITIAL_RADIO_CONTEXT: RadioContext = Object.freeze({
	/**
	 * Default value of {@link RadioContext['getGroupValue']}.
	 */
	getGroupValue: () => null,

	/**
	 * Default value of {@link RadioContext['groupValueIs']}.
	 */
	groupValueIs: () => false,

	/**
	 * Default value of {@link RadioContext['setGroupValue']}.
	 */
	setGroupValue: noop,
});

/**
 * Create {@link RadioContext} with React `Provider` and `Consumer`.
 */
export const RadioContext = createContext<RadioContext>({
	...INITIAL_RADIO_CONTEXT,
});

/**
 * Checks that an `unknown` value is a {@link RadioContext}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.getGroupValue()` is required and must be a function.
 *   - `value.groupValueIs()` is required and must be a function.
 *   - `value.setGroupValue()` is required and must be a function.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link RadioContext}.
 */
export const isRadioContext = (value: unknown): value is RadioContext =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.getGroupValue()
	 */
	'getGroupValue' in value &&
	isFunction(value.getGroupValue) &&
	/**
	 * value.groupValueIs()
	 */
	'groupValueIs' in value &&
	isFunction(value.groupValueIs) &&
	/**
	 * value.setGroupValue()
	 */
	'setGroupValue' in value &&
	isFunction(value.setGroupValue);
