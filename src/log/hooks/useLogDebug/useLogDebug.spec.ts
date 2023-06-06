import { renderHook } from '@testing-library/react-hooks';
import { useLogDebug } from './useLogDebug';

describe('useLogDebug()', () => {
	let message: string | null = null;
	let mockUseLog: jest.Mock | null = null;

	beforeEach(async () => {
		renderHook(() => {
			message = 'test';
			mockUseLog = jest.fn();

			return useLogDebug({
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

	it('should use the "debug" severity level', async () => {
		expect(mockUseLog).toHaveBeenCalledWith(
			expect.objectContaining({ severity: 'debug' }),
		);
	});
});
