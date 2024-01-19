import { themeIsLoaded } from './themeIsLoaded';

describe('themeIsLoaded()', () => {
	let $link: HTMLLinkElement | null = null;

	beforeEach(() => {
		$link = document.createElement('link');

		$link.rel = 'stylesheet';
		$link.href = `./dark.css`;
		$link.onload = jest.fn();

		document.head.appendChild($link);
	});

	afterEach(() => {
		if ($link) {
			document.head.removeChild($link);
		}

		$link = null;
	});

	it('should return true given the name of a loaded theme', () => {
		expect(themeIsLoaded('dark')).toBe(true);
	});

	it('should return false given the name of a not loaded theme', () => {
		expect(themeIsLoaded('light')).toBe(false);
	});
});
