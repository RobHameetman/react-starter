import { createContext } from 'react';
import isBoolean from 'lodash/isBoolean';
import isFunction from 'lodash/isFunction';
import isObject from 'lodash/isObject';
import noop from 'lodash/noop';

/**
 * {@link CompoundComponentContext} description here...
 */
export interface CompoundComponentContext {
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
 * {@link CompoundComponentContext} default values.
 */
export const INITIAL_COMPOUND_COMPONENT_CONTEXT = Object.freeze({
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
 * Create {@link CompoundComponentContext} with React {@link Provider} and {@link Consumer}.
 */
export const CompoundComponentContext = createContext<CompoundComponentContext>({
	...INITIAL_COMPOUND_COMPONENT_CONTEXT,
});

/**
 * Checks that an `unknown` value is a {@link CompoundComponentContext}.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.newState` is required and must be a boolean.
 *   - `value.newMethod()` is required and must be a function.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link CompoundComponentContext}.
 */
export const isCompoundComponentContext = (value: unknown): value is CompoundComponentContext =>
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

export default CompoundComponentContext;
