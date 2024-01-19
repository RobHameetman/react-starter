/**
 * Check if the theme is already loaded when switching between themes.
 *
 * @param theme - The theme to switch to.
 *
 * @returns A boolean value that determines if the theme is loaded.
 */
export const themeIsLoaded = (theme = 'light') => {
	const $head = document.querySelector('head');

	if (!$head) {
		return false;
	}

	return Array.from($head?.children).some((child) =>
		child.getAttribute('href')?.includes(`${theme}.css`),
	);
};
