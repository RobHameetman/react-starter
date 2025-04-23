/* eslint-disable @typescript-eslint/naming-convention */
import { $FC } from 'react';
import { renderPage } from '@@/utils';
import { SupportPage } from './SupportPage';

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

describe('<SupportPage />', () => {
	it('should render', () => {
		expect(() => renderPage(<SupportPage />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(renderPage(<SupportPage />)).toMatchSnapshot();
	});

	it('should render a <View />', () => {
		expect(MockNav).toHaveBeenCalled();
	});

	it('should greet the user', () => {
		expect(MockHello).toHaveBeenCalled();
	});
});
