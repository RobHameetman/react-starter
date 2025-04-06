import { createContext } from 'react';
import { isBoolean } from '@/utils/functions/check/js/core/isBoolean';
import { isFunction } from '@/utils/functions/check/js/core/isFunction';
import { isObject } from '@/utils/functions/check/js/core/isObject';
import { noop } from '@/utils/functions/misc/noop';
import { Theme, isTheme } from '@/theme/types/Theme';

/**
 * `ThemeContext` holds any global state related to users and their current
 * theming preferences.
 */
export interface AppContext {
	/**
	 * Set to `true` when the user's theme is 'dark'.
	 * @defaultValue - `false`
	 */
	readonly isDark: boolean;

	/**
	 * The user's system preference for using the 'dark' theme.
	 * @defaultValue - `false`
	 */
	readonly prefersDarkMode: boolean;

	/**
	 * The user's theme is stored in LocalStorage and updated in our shared state
	 * by the `Sidebar`.
	 * @defaultValue - `null`
	 */
	readonly theme: Theme | null;

	/**
	 * Set the theme to "Dark" in the `Sidebar`.
	 * @defaultValue - A no-op function.
	 */
	readonly setDarkTheme: () => void;

	/**
	 * Set the theme to "Light" in the `Sidebar`.
	 * @defaultValue - A no-op function.
	 */
	readonly setLightTheme: () => void;

	/**
	 * Set the theme to the user's preferred system theme in the `Sidebar`.
	 * @defaultValue - A no-op function.
	 */
	readonly setSystemTheme: () => void;
}

/**
 * `ThemeContext` default values.
 */
export const INITIAL_THEME_CONTEXT = Object.freeze({
	/**
	 * Default value of `isDark`.
	 */
	isDark: false,

	/**
	 * Default value of `prefersDarkMode`.
	 */
	prefersDarkMode: false,

	/**
	 * Default value of `theme`.
	 */
	theme: null,

	/**
	 * Default value of `setDarkTheme`.
	 */
	setDarkTheme: noop,

	/**
	 * Default value of `setLightTheme`.
	 */
	setLightTheme: noop,

	/**
	 * Default value of `setSystemTheme`.
	 */
	setSystemTheme: noop,
});

/**
 * Create `ThemeContext` with React `Provider` and `Consumer`.
 */
export const AppContext = createContext<AppContext>({
	...INITIAL_THEME_CONTEXT,
});

/**
 * Checks that an `unknown` value is a {@link AppContext}.
 *
 * Requirements:
 *   - `value` must be a non-empty object.
 *   - `value.isDark` is required and must be a boolean.
 *   - `value.prefersDarkMode` is required and must be a boolean.
 *   - `value.theme` is required and must be a valid `Themes` or `null`.
 *   - `value.setDarkTheme` is required and must be a function.
 *   - `value.setLightTheme` is required and must be a function.
 *   - `value.setSystemTheme` is required and must be a function.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link AppContext}.
 */
export const isAppContext = (value: unknown): value is AppContext =>
	isObject(value) &&
	/**
	 * value.isDark
	 */
	'isDark' in value &&
	isBoolean(value.isDark) &&
	/**
	 * value.prefersDarkMode
	 */
	'prefersDarkMode' in value &&
	isBoolean(value.prefersDarkMode) &&
	/**
	 * value.theme
	 */
	'theme' in value &&
	(isTheme(value.theme) || value.theme === null) &&
	/**
	 * value.setDarkTheme()
	 */
	'setDarkTheme' in value &&
	isFunction(value.setDarkTheme) &&
	/**
	 * value.setLightTheme()
	 */
	'setLightTheme' in value &&
	isFunction(value.setLightTheme) &&
	/**
	 * value.setSystemTheme()
	 */
	'setSystemTheme' in value &&
	isFunction(value.setSystemTheme);
