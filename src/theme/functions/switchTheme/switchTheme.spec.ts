import { switchTheme } from './switchTheme';

describe('switchTheme()', () => {
	beforeEach(() => {
		document.body.classList.add('dark');
		const onload = switchTheme('light');

		onload();
	});

	afterEach(() => {
		document.body.classList.remove('light');
	});

	it('should return a curried function', () => {
		expect(typeof switchTheme()).toBe('function');
	});

	it('should switch the theme from "dark" to "light"', () => {
		expect(document.body.classList).not.toContain('dark');
		expect(document.body.classList).toContain('light');
	});
});
