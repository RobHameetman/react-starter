import { renderHook } from '@testing-library/react';
import { isRadioContext } from '../../contexts/RadioContext';
import { useRadioContext } from './useRadioContext';
import { MockRadioProvider } from './__test__';

describe('useRadioContext()', () => {
	let result: unknown = null;

	beforeEach(() => {
		({
			result: { current: result },
		} = renderHook(() => useRadioContext(), {
			wrapper: MockRadioProvider,
		}));
	});

	afterEach(() => {
		result = null;
	});

	it('should return a valid RadioContext', () => {
		expect(result).not.toBeNull();
		expect(isRadioContext(result)).toBe(true);
	});
});
