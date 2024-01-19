import { faker } from '@faker-js/faker';
import { renderHook } from '@testing-library/react';
import type { StatusType } from '@datadog/browser-logs';
import { useLog } from './useLog';

describe('useLog()', () => {
	let severity: StatusType | null = null;
	let message: string | null = null;
	let mockLog: jest.Mock | null = null;

	beforeEach(async () => {
		renderHook(() => {
			/* @ts-expect-error - Type 'boolean' is not assignable to type 'string'. */
			process.env.DATADOG_ENABLED = true;

			severity = faker.helpers.arrayElement(['debug', 'error', 'info', 'warn']);
			message = 'test';

			mockLog = jest.fn();

			return useLog({
				auto: true,
				severity,
				message: String(message),
				_dependencies: {
					log: mockLog,
				},
			});
		});
	});

	afterEach(() => {
		jest.restoreAllMocks();

		delete process.env.DATADOG_ENABLED;

		severity = null;
		message = null;
		mockLog = null;
	});

	it('should prefix the message with the given severity', async () => {
		expect(mockLog).toHaveBeenCalledWith(
			expect.stringContaining(
				`[${(severity ?? '').toLocaleUpperCase()}]: ${message}`,
			),
			expect.objectContaining({ message, timestamp: expect.any(String) }),
			severity ?? '',
		);
	});
});
