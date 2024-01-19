import { renderHook } from '@testing-library/react';
import { isTabsContext } from '../../contexts/TabsContext';
import { useTabs } from './useTabs';

describe('useTabs()', () => {
	let $context: unknown = null;

	beforeEach(() => {
		({
			result: { current: $context },
		} = renderHook(() => useTabs()));
	});

	afterEach(() => {
		$context = null;
	});

	it('should return a valid TabsContext', () => {
		expect(isTabsContext($context)).toBe(true);
	});
});
