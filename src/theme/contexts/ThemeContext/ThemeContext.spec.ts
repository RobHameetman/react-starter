import { isThemeContext } from './ThemeContext';
import { fakeThemeContext } from './__test__';

describe('isThemeContext()', () => {
	it('should return true given a valid ThemeContext', () => {
		expect(isThemeContext(fakeThemeContext())).toBe(true);
	});

	it('should return false given an invalid ThemeContext', () => {
		expect(isThemeContext(fakeThemeContext({ theme: undefined }))).toBe(false);
	});
});
