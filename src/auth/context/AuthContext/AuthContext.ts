import { createContext } from 'react';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';

/**
 * This context/provider is used within the {@link AuthProvider} component to
 * provide the auth state.
 */
export interface AuthContext {
	/**
	 * @TODO
	 */
	readonly key: string;
}

/**
 * {@link AuthContext} default values.
 */
export const INITIAL_AUTH_CONTEXT: AuthContext = Object.freeze({
	/**
	 * Default value for {@link AuthContext.key}.
	 */
	key: '',
});

/**
 * Create {@link AuthContext} with React `Provider` and `Consumer`.
 */
export const AuthContext = createContext<AuthContext>(INITIAL_AUTH_CONTEXT);

/**
 * Checks that an `unknown` value is an {@link AuthContext}.
 *
 * Requirements:
 *   - `value` must be an object.
 *   - `value.key` is required and must be a string.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link AuthContext}.
 */
export const isAuthContext = (value: unknown): value is AuthContext =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.key
	 */
	'key' in value &&
	isString(value.key);
