import { $FC } from 'react';
import { NextUIProvider } from '@nextui-org/react';

/**
 * Place all of your global/top-level providers in this component.
 *
 * @param props - A {@link ThemeProviderProps} object.
 *
 * @returns A rendered provider of application-level state for authorization and
 * analytics utilities.
 */
export const ThemeProvider: $FC = ({ children }) => {
	return <NextUIProvider>{children}</NextUIProvider>;
};
