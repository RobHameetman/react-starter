import { renderHook } from '@testing-library/react';
import { isButtonContext } from '../../contexts/ButtonContext';
import { useButtonContext } from './useButtonContext';
import { MockButtonProvider } from './__test__';

describe('useButtonContext()', () => {
	let result: unknown = null;

	beforeEach(() => {
		({
			result: { current: result },
		} = renderHook(() => useButtonContext(), { wrapper: MockButtonProvider }));
	});

	afterEach(() => {
		result = null;
	});

	it('should return a valid ButtonContext', () => {
		expect(result).not.toBeNull();
		expect(isButtonContext(result)).toBe(true);
	});
});
