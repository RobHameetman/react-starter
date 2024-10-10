import { $FC } from 'react';
import { AuthProvider } from '@/auth';
import { History } from 'history';
import { ThemeProvider } from '../ThemeProvider';

/**
 * Prop types for the {@link AppProvider} component.
 */
export interface AppProviderProps {
	/**
	 * The current {@link History} object instantiated by the call to
	 * `createBrowserHistory()` in `App.tsx`.
	 */
	readonly history: History;
}

/**
 * Place all of your global/top-level providers in this component.
 *
 * @param props - An {@link AppProviderProps} object.
 *
 * @returns A rendered provider of application-level state for authorization and
 * analytics utilities.
 */
export const AppProvider: $FC<AppProviderProps> = ({ children }) => (
	<ThemeProvider>
		<AuthProvider value="">{children}</AuthProvider>
	</ThemeProvider>
);
