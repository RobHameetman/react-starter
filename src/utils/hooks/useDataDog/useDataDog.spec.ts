import { datadogRum } from '@datadog/browser-rum';
import { faker } from '@faker-js/faker';
import { renderHook } from '@testing-library/react-hooks';
import { useDataDog } from './useDataDog';

describe('useDataDog()', () => {
	let mockInit: jest.Mock | null = null;

	beforeEach(() => {
		mockInit = jest.fn();
		jest.spyOn(datadogRum, 'init');
		datadogRum.init = mockInit;

		process.env.DATADOG_APPLICATION_ID = faker.datatype.uuid();
		process.env.DATADOG_CLIENT_TOKEN = faker.datatype.string();

		renderHook(() => {
			useDataDog();
		});
	});

	afterEach(() => {
		delete process.env.DATADOG_APPLICATION_ID;
		delete process.env.DATADOG_CLIENT_TOKEN;

		mockInit = null;
	});

	it('should initialize application monitoring with DataDog RUM', () => {
		expect(mockInit).toBeCalled();
	});
});
