import { renderHook } from '@testing-library/react';
import { isCompoundComponentContext } from '../../contexts/CompoundComponentContext';
import { useCompoundComponentContext } from './useCompoundComponentContext';
import { MockCompoundComponentProvider } from './__test__';

describe('useCompoundComponentContext()', () => {
	let result: unknown = null;

	beforeEach(() => {
		({
			result: { current: result },
		} = renderHook(() => useCompoundComponentContext(), { wrapper: MockCompoundComponentProvider }));
	});

	afterEach(() => {
		result = null;
	});

	it('should return a valid CompoundComponentContext', () => {
		expect(result).not.toBeNull();
		expect(isCompoundComponentContext(result)).toBe(true);
	});
});
