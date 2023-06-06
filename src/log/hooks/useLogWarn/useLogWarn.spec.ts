import { renderHook } from '@testing-library/react-hooks';
import { useLogWarn } from './useLogWarn';

describe('useLogWarn()', () => {
	let message: string | null = null;
	let mockUseLog: jest.Mock | null = null;

	beforeEach(async () => {
		renderHook(() => {
			message = 'test';
			mockUseLog = jest.fn();

			return useLogWarn({
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

	it('should use the "warn" severity level', async () => {
		expect(mockUseLog).toHaveBeenCalledWith(
			expect.objectContaining({ severity: 'warn' }),
		);
	});
});
