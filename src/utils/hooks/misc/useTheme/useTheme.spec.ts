import { renderHook } from '@testing-library/react';
import { isThemeContext } from '@/utils/contexts/ThemeContext';
import { useTheme } from './useTheme';
import { MockThemeProvider } from './__test__';

describe('useTheme()', () => {
	let result: unknown = null;

	beforeEach(() => {
		({
			result: { current: result },
		} = renderHook(() => useTheme(), { wrapper: MockThemeProvider }));
	});

	afterEach(() => {
		result = null;
	});

	it('should return a valid ThemeContext', () => {
		expect(result).not.toBeNull();
		expect(isThemeContext(result)).toBe(true);
	});
});
