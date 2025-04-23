/* eslint-disable @typescript-eslint/naming-convention */
import { $FC } from 'react';
import { renderPage } from '@@/utils';
import { LoginPage } from './LoginPage';

let MockHello: jest.Mock | undefined;
let MockNav: jest.Mock | undefined;

jest.mock('@remotes/components', () => {
	MockHello = jest.fn(() => <></>);

	return {
		__esModule: true,
		Hello: MockHello,
	};
});

jest.mock('@host/nav', () => {
	MockNav = jest.fn((({ children }) => <>{children}</>) as $FC);

	return {
		__esModule: true,
		Nav: MockNav,
	};
});

describe('<LoginPage />', () => {
	it('should render', () => {
		expect(() => renderPage(<LoginPage />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(renderPage(<LoginPage />)).toMatchSnapshot();
	});

	it('should render a <View />', () => {
		expect(MockNav).toHaveBeenCalled();
	});

	it('should greet the user', () => {
		expect(MockHello).toHaveBeenCalled();
	});
});
