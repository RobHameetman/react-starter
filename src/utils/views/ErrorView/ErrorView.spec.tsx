/* eslint-disable @typescript-eslint/naming-convention */
import { FC } from 'react';
import { renderView } from '@test/utils';
import { ErrorView } from './ErrorView';

let MockNav: jest.Mock | undefined;

jest.mock('@host/nav', () => {
	MockNav = jest.fn((({ children }) => <>{children}</>) as FC);

	return {
		__esModule: true,
		MemberNav: MockNav,
	};
});

describe('<ErrorView />', () => {
	it('should render', async () => {
		expect(() => renderView(<ErrorView />)).not.toThrowError();
	});

	// eslint-disable-next-line jest/no-disabled-tests
	it.skip('should match the current snapshot', async () => {
		expect(renderView(<ErrorView />)).toMatchSnapshot();
	});

	it('should render a <View />', () => {
		expect(MockNav).toHaveBeenCalled();
	});
});
