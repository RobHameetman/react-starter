import { renderHook } from '@testing-library/react';
import { isSelectContext } from '../../contexts/SelectContext';
import { useSelectContext } from './useSelectContext';
import { MockSelectProvider } from './__test__';

describe('useSelectContext()', () => {
	let result: unknown = null;

	beforeEach(() => {
		({
			result: { current: result },
		} = renderHook(() => useSelectContext(), { wrapper: MockSelectProvider }));
	});

	afterEach(() => {
		result = null;
	});

	it('should return a valid ThemeContext', () => {
		expect(result).not.toBeNull();
		expect(isSelectContext(result)).toBe(true);
	});
});
