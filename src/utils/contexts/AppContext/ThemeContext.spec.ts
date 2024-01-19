import { ThemeContext, isThemeContext } from './ThemeContext';
import { fakeThemeContext } from './__test__';

describe('isThemeContext()', (): void => {
	it('should return true given a valid ThemeContext', (): void => {
		expect(isThemeContext(fakeThemeContext())).toBe(true);
	});

	it('should return false given an invalid ThemeContext', (): void => {
		expect(isThemeContext(fakeThemeContext({ theme: undefined }))).toBe(false);
	});
});
