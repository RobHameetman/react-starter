/* eslint-disable @typescript-eslint/naming-convention */
import { $FC } from 'react';
import { renderView } from '@test/utils';
import { SupportView } from './SupportView';

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

describe('<SupportView />', () => {
	it('should render', () => {
		expect(() => renderView(<SupportView />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(renderView(<SupportView />)).toMatchSnapshot();
	});

	it('should render a <View />', () => {
		expect(MockNav).toHaveBeenCalled();
	});

	it('should greet the user', () => {
		expect(MockHello).toHaveBeenCalled();
	});
});
