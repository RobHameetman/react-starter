import { createContext } from 'react';
import { isBoolean } from '@app/utils/functions/check/js/core/isBoolean';
import { isObject } from '@app/utils/functions/check/js/core/isObject';
import { isString } from '@app/utils/functions/check/js/core/isString';
import { User, isUser } from '@app/users//types/User';

/**
 * This context/provider is used within the {@link AuthProvider} component to
 * provide the auth state.
 */
export interface AuthContext {
	/**
	 * The client ID provided by Cognito to verify the correct user pool.
	 */
	readonly clientId: string;

	/**
	 * The client secret provided by Cognito to verify the correct user pool.
	 */
	readonly clientSecret: string;

	/**
	 * The URI used to redirect the user after signing in.
	 */
	readonly redirectUri: string;

	/**
	 * Determines if the user is signed in.
	 * @defaultValue - `false`
	 */
	readonly signedIn: boolean;

	/**
	 * User data returned from the Cognito User Pool.
	 * @defaultValue - `null`
	 */
	readonly user: User | null;
}

/**
 * {@link AuthContext} default values.
 */
export const INITIAL_AUTH_CONTEXT: AuthContext = Object.freeze({
	/**
	 * Default value for {@link AuthContext.clientId}.
	 */
	clientId: '',

	/**
	 * Default value for {@link AuthContext.clientSecret}.
	 */
	clientSecret: '',

	/**
	 * Default value for {@link AuthContext.redirectUri}.
	 */
	redirectUri: '',

	/**
	 * Default value for {@link AuthContext.signedIn}.
	 */
	signedIn: false,

	/**
	 * Default value for {@link AuthContext.user}.
	 */
	user: null,
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
 *   - `value.clientId` is required and must be a string.
 *   - `value.clientSecret` is required and must be a string.
 *   - `value.redirectUri` is required and must be a string.
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
	 * value.clientId
	 */
	'clientId' in value &&
	isString(value.clientId) &&
	/**
	 * value.clientSecret
	 */
	'clientSecret' in value &&
	isString(value.clientSecret) &&
	/**
	 * value.redirectUri
	 */
	'redirectUri' in value &&
	isString(value.redirectUri) &&
	/**
	 * value.signedIn
	 */
	'signedIn' in value &&
	isBoolean(value.signedIn) &&
	/**
	 * value.user
	 */
	'user' in value &&
	(isUser(value.user) || value.user === null);
