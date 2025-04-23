/* eslint-disable @typescript-eslint/naming-convention */
import { $FC } from 'react';
import { renderPage } from '@@/utils';
import { SettingsPage } from './SettingsPage';

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

describe('<SettingsPage />', () => {
	it('should render', () => {
		expect(() => renderPage(<SettingsPage />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(renderPage(<SettingsPage />)).toMatchSnapshot();
	});

	it('should render a <View />', () => {
		expect(MockNav).toHaveBeenCalled();
	});

	it('should greet the user', () => {
		expect(MockHello).toHaveBeenCalled();
	});
});
