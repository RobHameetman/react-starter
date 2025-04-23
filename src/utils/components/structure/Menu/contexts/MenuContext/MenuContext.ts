import { createContext } from 'react';
import isBoolean from 'lodash/isBoolean';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import noop from 'lodash/noop';

/**
 * {@link MenuContext} description here...
 */
export interface MenuContext {
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
 * {@link MenuContext} default values.
 */
export const INITIAL_MENU_CONTEXT = Object.freeze({
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
 * Create {@link MenuContext} with React {@link Provider} and {@link Consumer}.
 */
export const MenuContext = createContext<MenuContext>({
	...INITIAL_MENU_CONTEXT,
});

/**
 * Checks that an `unknown` value is a {@link MenuContext}.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.newState` is required and must be a boolean.
 *   - `value.newMethod()` is required and must be a function.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link MenuContext}.
 */
export const isMenuContext = (value: unknown): value is MenuContext =>
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

export default MenuContext;
