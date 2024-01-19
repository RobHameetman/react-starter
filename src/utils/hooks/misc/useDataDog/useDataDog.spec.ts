import { datadogRum } from '@datadog/browser-rum';
import { datadogLogs } from '@datadog/browser-logs';
import { faker } from '@faker-js/faker';
import { renderHook } from '@testing-library/react';
import { useDataDog } from './useDataDog';

describe('useDataDog()', () => {
	let mockLogsInit: jest.Mock | null = null;
	let mockRumInit: jest.Mock | null = null;

	beforeEach(() => {
		mockLogsInit = jest.fn();
		mockRumInit = jest.fn();

		jest.spyOn(datadogLogs, 'init');
		jest.spyOn(datadogRum, 'init');

		datadogLogs.init = mockLogsInit;
		datadogRum.init = mockRumInit;

		process.env.DATADOG_APPLICATION_ID = faker.string.uuid();
		process.env.DATADOG_CLIENT_TOKEN = faker.string.sample();

		/* @ts-expect-error - Type 'boolean' is not assignable to type 'string'. */
		process.env.DATADOG_LOGS_ENABLED = true;

		/* @ts-expect-error - Type 'boolean' is not assignable to type 'string'. */
		process.env.DATADOG_RUM_ENABLED = true;

		renderHook(() => {
			useDataDog();
		});
	});

	afterEach(() => {
		delete process.env.DATADOG_APPLICATION_ID;
		delete process.env.DATADOG_CLIENT_TOKEN;
		delete process.env.DATADOG_LOGS_ENABLED;
		delete process.env.DATADOG_RUM_ENABLED;

		mockLogsInit = null;
		mockRumInit = null;
	});

	it('should initialize application logging', () => {
		expect(mockLogsInit).toBeCalled();
	});

	it('should initialize application monitoring with DataDog RUM', () => {
		expect(mockRumInit).toBeCalled();
	});
});
