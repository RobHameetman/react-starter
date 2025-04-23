import { renderHook } from '@testing-library/react';
import { useSortBy } from './useSortBy';

describe('useSortBy()', () => {
	let mockSetState: jest.Mock | null = null;
	let error: Error | null = null;
	let result: unknown = null;

	beforeEach(() => {
		try {
			mockSetState = jest.fn();

			({
				result: { current: result },
			} = renderHook(() =>
				/* @ts-expect-error - Argument of type 'Mock<any, any, any> | null' is not assignable to parameter of type 'Dispatch<SetStateAction<TableState>> | undefined'. */
				useSortBy(mockSetState),
			));
		} catch (thrown) {
			error = !(thrown instanceof Error) ? (thrown as Error) : new Error();
			console.error(thrown);
		}
	});

	afterEach(() => {
		jest.restoreAllMocks();

		mockSetState = null;
		error = null;
		result = null;
	});

	it('should not throw an error', () => {
		expect(error).toBeNull();
	});

	it('should depend on the given dependency', () => {
		expect(mockSetState).toBeCalled();
	});

	it('should return the expected result', () => {
		expect(result).toBe(expect.any(Object));
	});
});
