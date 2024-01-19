import { renderHook } from '@testing-library/react';
import { useLogInfo } from './useLogInfo';

describe('useLogInfo()', () => {
	let message: string | null = null;
	let mockUseLog: jest.Mock | null = null;

	beforeEach(async () => {
		renderHook(() => {
			message = 'Test';
			mockUseLog = jest.fn();

			return useLogInfo({
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

	it('should use the "info" severity level', async () => {
		expect(mockUseLog).toHaveBeenCalledWith(
			expect.objectContaining({ severity: 'info' }),
		);
	});
});
