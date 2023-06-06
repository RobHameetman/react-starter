/* eslint-disable @typescript-eslint/naming-convention */
import { render } from '@testing-library/react';
import { App } from './App';

let mockUseAppVersion: jest.Mock | undefined;
let mockUseChat: jest.Mock | undefined;
let mockUseDataDog: jest.Mock | undefined;

jest.mock('./nav', () => {
	return {
		__esModule: true,
		APP_BASENAME: '/',
		Router: jest.fn(() => <></>),
		Routes: jest.fn(() => <></>),
	};
});

jest.mock('./support', () => {
	mockUseChat = jest.fn(() => {});

	return {
		__esModule: true,
		useChat: mockUseChat,
	};
});

jest.mock('./utils', () => {
	mockUseDataDog = jest.fn(() => {});

	return {
		__esModule: true,
		AppProvider: jest.fn(() => <></>),
		ErrorView: jest.fn(() => <></>),
		useDataDog: mockUseDataDog,
	};
});

describe('<App />', () => {
	it('should render correctly', () => {
		expect(() => render(<App />)).not.toThrowError();
	});

	it('should match the current snapshot', async () => {
		expect(render(<App />)).toMatchSnapshot();
	});

	it('should force a hard refresh when the user receives a new version', async () => {
		expect(mockUseAppVersion).toBeCalled();
	});

	it('should have chat support enabled', async () => {
		expect(mockUseChat).toBeCalled();
	});

	it('should use DataDog RUM for logging', async () => {
		expect(mockUseDataDog).toBeCalled();
	});
});
