import { $FC } from 'react';
import { AuthContext, INITIAL_AUTH_CONTEXT } from '../AuthContext';

/**
 * Prop types for the {@link AuthProvider} component.
 */
export interface AuthProviderProps {
	/**
	 * @TODO
	 */
	readonly value: unknown;
}

/**
 * Provides the application with a context for authorization state.
 *
 * @example
 * ```
 * <AuthProvider />
 * ```
 */
export const AuthProvider: $FC<AuthProviderProps> = ({ children }) => {
	return (
		<AuthContext.Provider value={INITIAL_AUTH_CONTEXT}>
			{children}
		</AuthContext.Provider>
	);
};
