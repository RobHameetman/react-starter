/* eslint-disable @typescript-eslint/naming-convention */
import { $FC } from 'react';
import { renderPage } from '@@/utils';
import { ErrorPage } from './ErrorPage';

let MockNav: jest.Mock | undefined;

jest.mock('@host/nav', () => {
	MockNav = jest.fn((({ children }) => <>{children}</>) as $FC);

	return {
		__esModule: true,
		Nav: MockNav,
	};
});

describe('<ErrorPage />', () => {
	it('should render', async () => {
		expect(() => renderPage(<ErrorPage />)).not.toThrowError();
	});

	// eslint-disable-next-line jest/no-disabled-tests
	it.skip('should match the current snapshot', async () => {
		expect(renderPage(<ErrorPage />)).toMatchSnapshot();
	});

	it('should render a <View />', () => {
		expect(MockNav).toHaveBeenCalled();
	});
});
