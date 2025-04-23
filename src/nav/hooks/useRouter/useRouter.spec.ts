import { renderHook } from '@testing-library/react';
import { useRouter } from './useRouter';

describe('useRouter()', () => {
	let mockDependency: jest.Mock | null = null;
	let error: Error | null = null;
	let result: unknown = null;

	beforeEach(() => {
		try {
			mockDependency = jest.fn();

			({
				result: { current: result },
			} = renderHook(() => useRouter()));
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.restoreAllMocks();

		mockDependency = null;
		error = null;
		result = null;
	});

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should depend on the given dependency', () => {
		expect(mockDependency).toBeCalled();
	});

	it('should return the expected result', () => {
		expect(result).toBe(expect.any(Object));
	});
});
