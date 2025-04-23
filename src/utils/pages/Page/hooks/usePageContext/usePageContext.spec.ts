import { renderHook } from '@testing-library/react';
import { isPageContext } from '@/utils/pages/Page/contexts/PageContext';
import { usePageContext } from './usePageContext';

describe('usePageContext()', () => {
	let error: Error | null = null;
	let result: unknown = null;

	beforeEach(() => {
		try {
			({ result: { current: result } } = renderHook(() => usePageContext()));
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.restoreAllMocks();

		error = null;
		result = null;
	});

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should return a valid PageContext', () => {
		expect(isPageContext(result)).toBe(true);
	});
});
