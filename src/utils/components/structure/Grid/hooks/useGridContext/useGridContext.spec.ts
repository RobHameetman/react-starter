import { renderHook } from '@testing-library/react';
import { isGridContext } from '../../contexts/GridContext';
import { useGridContext } from './useGridContext';
import { MockNewProvider } from './__test__';

describe('useGridContext()', () => {
	let result: unknown = null;

	beforeEach(() => {
		({
			result: { current: result },
		} = renderHook(() => useGridContext(), { wrapper: MockNewProvider }));
	});

	afterEach(() => {
		result = null;
	});

	it('should return a valid ThemeContext', () => {
		expect(result).not.toBeNull();
		expect(isGridContext(result)).toBe(true);
	});
});
