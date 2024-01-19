import { createContext } from 'react';
import { isFunction } from '@app/utils/functions/check/js/core/isFunction';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { noop } from '@app/utils/functions/misc/noop';

/**
 * A shared state for checkbox groups.
 */
export interface CheckboxContext {
	/**
	 * Add a value to the list of selected checkbox values.
	 * @defaultValue - A no-op function.
	 */
	readonly addToGroupValue: (newValue: string, currentValue?: string) => string;

	/**
	 * Retrieve the list of values for the checkbox group as a string.
	 * @defaultValue - A no-op function.
	 */
	readonly getGroupValue: () => string | null;

	/**
	 * Check if a value is in the list of selected checkbox values.
	 * @defaultValue - A no-op function.
	 */
	readonly groupValueIncludes: (potentialValue: string) => boolean;

	/**
	 * Remove a value from the list of selected checkbox values.
	 * @defaultValue - A no-op function.
	 */
	readonly removeFromGroupValue: (
		removedValue: string,
		currentValue?: string,
	) => string;

	/**
	 * Remove a value from the list of selected checkbox values.
	 * @defaultValue - A no-op function.
	 */
	readonly setGroupValue: (
		value: string | ((currentValue: string) => string),
	) => void;
}

/**
 * {@link CheckboxContext} default values.
 */
export const INITIAL_CHECKBOX_CONTEXT: CheckboxContext = Object.freeze({
	/**
	 * Default value of {@link CheckboxContext['addToGroupValue']}.
	 */
	addToGroupValue: () => '',

	/**
	 * Default value of {@link CheckboxContext['getGroupValue']}.
	 */
	getGroupValue: () => null,

	/**
	 * Default value of {@link CheckboxContext['groupValueIncludes']}.
	 */
	groupValueIncludes: () => false,

	/**
	 * Default value of {@link CheckboxContext['removeFromGroupValue']}.
	 */
	removeFromGroupValue: () => '',

	/**
	 * Default value of {@link CheckboxContext['setGroupValue']}.
	 */
	setGroupValue: noop,
});

/**
 * Create {@link CheckboxContext} with React `Provider` and `Consumer`.
 */
export const CheckboxContext = createContext<CheckboxContext>({
	...INITIAL_CHECKBOX_CONTEXT,
});

/**
 * Checks that an `unknown` value is a {@link CheckboxContext}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.addToGroupValue()` is required and must be a function.
 *   - `value.getGroupValue()` is required and must be a function.
 *   - `value.groupValueIncludes()` is required and must be a function.
 *   - `value.removeFromGroupValue()` is required and must be a function.
 *   - `value.setGroupValue()` is required and must be a function.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link CheckboxContext}.
 */
export const isCheckboxContext = (value: unknown): value is CheckboxContext =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.addToGroupValue()
	 */
	'addToGroupValue' in value &&
	isFunction(value.addToGroupValue) &&
	/**
	 * value.getGroupValue()
	 */
	'getGroupValue' in value &&
	isFunction(value.getGroupValue) &&
	/**
	 * value.groupValueIncludes()
	 */
	'groupValueIncludes' in value &&
	isFunction(value.groupValueIncludes) &&
	/**
	 * value.removeFromGroupValue()
	 */
	'removeFromGroupValue' in value &&
	isFunction(value.removeFromGroupValue) &&
	/**
	 * value.setGroupValue()
	 */
	'setGroupValue' in value &&
	isFunction(value.setGroupValue);
