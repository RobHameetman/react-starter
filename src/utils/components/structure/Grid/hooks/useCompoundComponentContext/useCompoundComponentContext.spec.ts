import { renderHook } from '@testing-library/react';
import { isCompoundComponentContext } from '../../contexts/GridContext';
import { useCompoundComponentContext } from './useCompoundComponentContext';
import { MockNewProvider } from './__test__';

describe('useCompoundComponentContext()', () => {
	let result: unknown = null;

	beforeEach(() => {
		({
			result: { current: result },
		} = renderHook(() => useCompoundComponentContext(), { wrapper: MockNewProvider }));
	});

	afterEach(() => {
		result = null;
	});

	it('should return a valid ThemeContext', () => {
		expect(result).not.toBeNull();
		expect(isCompoundComponentContext(result)).toBe(true);
	});
});
