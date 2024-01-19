import { renderHook } from '@testing-library/react';
import { useLogError } from './useLogError';

describe('useLogError()', () => {
	let message: string | null = null;
	let mockUseLog: jest.Mock | null = null;

	beforeEach(async () => {
		renderHook(() => {
			message = 'test';
			mockUseLog = jest.fn();

			return useLogError({
				auto: true,
				message: String(message),
				_dependencies: {
					useLog: mockUseLog,
				},
			});
		});
	});

	afterEach(() => {
		jest.restoreAllMocks();

		message = null;
		mockUseLog = null;
	});

	it('should use the "error" severity level', async () => {
		expect(mockUseLog).toHaveBeenCalledWith(
			expect.objectContaining({ severity: 'error' }),
		);
	});
});
