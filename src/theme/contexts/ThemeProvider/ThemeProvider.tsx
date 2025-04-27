import { $FC, useCallback, useEffect, useState } from 'react';
import { switchTheme } from '@/theme/functions/switchTheme';
import { themeIsLoaded } from '@/theme/functions/themeIsLoaded';
import { useMediaQuery } from '@/utils/hooks/misc/useMediaQuery';
import { getItem } from '@/utils/functions/storage/getItem';
import { removeItem } from '@/utils/functions/storage/removeItem';
import { setItem } from '@/utils/functions/storage/setItem';
import { ThemeContext } from '../ThemeContext';

/**
 * Place all of your global/top-level providers in this component.
 *
 * @param props - A {@link ThemeProviderProps} object.
 *
 * @returns A rendered provider of application-level state for authorization and
 * analytics utilities.
 */
export const ThemeProvider: $FC<Record<string, unknown>> = ({ children }) => {
	const prefersDarkMode = useMediaQuery({
		query: '(prefers-color-scheme: dark)',
	});

	const cached = getItem('theme');

	const [theme, _setTheme] = useState<string>(
		cached === 'dark' || (!cached && prefersDarkMode) ? 'dark' : 'light',
	);

	const setTheme = useCallback((updatedTheme: string | null) => {
		_setTheme(
			updatedTheme === 'dark' || (!updatedTheme && prefersDarkMode)
				? 'dark'
				: 'light',
		);

		if (updatedTheme !== null) {
			setItem('theme', updatedTheme);
		} else {
			removeItem('theme');
		}
	}, []);

	const setDarkTheme = useCallback(() => setTheme('dark'), [setTheme]);
	const setLightTheme = useCallback(() => setTheme('light'), [setTheme]);
	const setSystemTheme = useCallback(() => setTheme(null), [setTheme]);

	useEffect(() => {
		const $head = document.head;
		const $body = document.body;

		if (!$body.classList.contains(theme)) {
			if (!themeIsLoaded(theme)) {
				const $link = document.createElement('link');

				$link.rel = 'stylesheet';
				$link.href = `/themes/${theme}.css`;
				$link.onload = switchTheme(theme);

				$head.appendChild($link);
			} else {
				switchTheme(theme)();
			}
		}
	}, [theme]);

	return (
		<ThemeContext.Provider
			value={{
				isDark: theme === 'dark',
				prefersDarkMode,
				theme: null,
				setDarkTheme,
				setLightTheme,
				setSystemTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
