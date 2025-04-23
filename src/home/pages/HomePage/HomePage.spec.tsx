/* eslint-disable @typescript-eslint/naming-convention */
import { $FC } from 'react';
import { renderPage } from '@@/utils';
import { HomePage } from './HomePage';

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

describe('<HomePage />', () => {
	it('should render', () => {
		expect(() => renderPage(<HomePage />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(renderPage(<HomePage />)).toMatchSnapshot();
	});

	it('should render a <View />', () => {
		expect(MockNav).toHaveBeenCalled();
	});

	it('should greet the user', () => {
		expect(MockHello).toHaveBeenCalled();
	});
});
