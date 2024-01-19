/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{ts,tsx}',
		'./src/*.{ts,tsx}',
	],
	theme: {
		screens: {
			xs: '650px',
			sm: '960px',
			md: '1280px',
			lg: '1400px',
			xl: '1920px',
		},
	},
	plugins: [],
};
