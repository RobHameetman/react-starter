import { renderHook } from '@testing-library/react';
import { isCheckboxContext } from '../../contexts/CheckboxContext';
import { useCheckboxContext } from './useCheckboxContext';
import { MockCheckboxProvider } from './__test__';

describe('useCheckboxContext()', () => {
	let result: unknown = null;

	beforeEach(() => {
		({
			result: { current: result },
		} = renderHook(() => useCheckboxContext(), {
			wrapper: MockCheckboxProvider,
		}));
	});

	afterEach(() => {
		result = null;
	});

	it('should return a valid CheckboxContext', () => {
		expect(result).not.toBeNull();
		expect(isCheckboxContext(result)).toBe(true);
	});
});
