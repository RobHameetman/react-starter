import { renderHook } from '@testing-library/react';
import { isNewContext } from '@/path/to/NewContext';
import { useNewContext } from './useNewContext';
import { MockNewProvider } from './__test__';

describe('useNewContext()', () => {
	let result: unknown = null;

	beforeEach(() => {
		({
			result: { current: result },
		} = renderHook(() => useNewContext(), { wrapper: MockNewProvider }));
	});

	afterEach(() => {
		result = null;
	});

	it('should return a valid ThemeContext', () => {
		expect(result).not.toBeNull();
		expect(isNewContext(result)).toBe(true);
	});
});
