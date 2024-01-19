/**
 * Update the CSS class list of the `<body>` to update to a new theme.
 *
 * @param theme - The theme to switch to.
 *
 * @returns A function that switches the theme in an "onload" event.
 */
export const switchTheme =
	(theme = 'light') =>
	() => {
		const $body = document.querySelector('body');

		if ($body) {
			['light', 'dark'].forEach((theme) => $body.classList.remove(theme));

			$body.classList.add(theme);
		}
	};
