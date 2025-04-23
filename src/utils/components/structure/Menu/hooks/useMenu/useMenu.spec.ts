import { renderHook } from '@testing-library/react';
import { isMenuContext } from '../../contexts/MenuContext';
import { useMenu } from './useMenu';
import { MockMenuProvider } from './__test__';

describe('useMenu()', () => {
	let result: unknown = null;

	beforeEach(() => {
		({
			result: { current: result },
		} = renderHook(() => useMenu(), { wrapper: MockMenuProvider }));
	});

	afterEach(() => {
		result = null;
	});

	it('should return a valid CompoundComponentContext', () => {
		expect(result).not.toBeNull();
		expect(isMenuContext(result)).toBe(true);
	});
});
