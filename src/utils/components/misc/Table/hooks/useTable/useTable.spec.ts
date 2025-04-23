import { renderHook } from '@testing-library/react';
import { isTableContext as isTable } from '../../contexts/TableContext';
import { useTable } from './useTable';
import { MockTableProvider } from './__test__';

describe('useTable()', () => {
	let result: unknown = null;

	beforeEach(() => {
		({
			result: { current: result },
		} = renderHook(() => useTable(), { wrapper: MockTableProvider }));
	});

	afterEach(() => {
		result = null;
	});

	it('should return a valid ThemeContext', () => {
		expect(result).not.toBeNull();
		expect(isTable(result)).toBe(true);
	});
});
