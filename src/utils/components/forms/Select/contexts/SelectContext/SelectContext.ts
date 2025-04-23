import { createContext } from 'react';
import isBoolean from 'lodash/isBoolean';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import noop from 'lodash/noop';

/**
 * {@link SelectContext} description here...
 */
export interface SelectContext {
	/**
	 * [Optional] @TODO
	 * @defaultValue - `false`
	 */
	readonly newState?: boolean;

	/**
	 * [Optional] @TODO
	 * @defaultValue - A no-op function
	 */
	readonly newMethod?: () => void;
}

/**
 * {@link SelectContext} default values.
 */
export const INITIAL_SELECT_CONTEXT = Object.freeze({
	/**
	 * Default value of `newState`.
	 */
	newState: false,

	/**
	 * Default value of `newMethod`.
	 */
	newMethod: noop,
});

/**
 * Create {@link SelectContext} with React {@link Provider} and {@link Consumer}.
 */
export const SelectContext = createContext<SelectContext>({
	...INITIAL_SELECT_CONTEXT,
});

/**
 * Checks that an `unknown` value is a {@link SelectContext}.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.newState` is required and must be a boolean.
 *   - `value.newMethod()` is required and must be a function.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link SelectContext}.
 */
export const isSelectContext = (value: unknown): value is SelectContext =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.newState
	 */
	'newState' in value &&
	isBoolean(value.newState) &&
	/**
	 * value.newMethod()
	 */
	'newMethod' in value &&
	isFunction(value.newMethod);

export default SelectContext;
