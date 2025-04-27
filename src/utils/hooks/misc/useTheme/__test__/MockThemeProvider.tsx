import {
	INITIAL_THEME_CONTEXT,
	ThemeContext,
} from '@/theme/contexts/ThemeContext';

export const MockThemeProvider = jest.fn(({ children }) => (
	<ThemeContext.Provider value={INITIAL_THEME_CONTEXT}>
		{children}
	</ThemeContext.Provider>
));
