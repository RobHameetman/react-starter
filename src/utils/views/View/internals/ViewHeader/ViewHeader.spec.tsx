/* eslint-disable @typescript-eslint/naming-convention */
import { $FC } from 'react';
import { render } from '@testing-library/react';
import { ViewHeader } from './ViewHeader';

let MockNav: jest.Mock | undefined;

jest.mock('@host/nav', () => {
	MockNav = jest.fn((({ children }) => <>{children}</>) as $FC);

	return {
		__esModule: true,
		Nav: MockNav,
	};
});

describe('<ViewHeader />', () => {
	it('should render', () => {
		expect(() => render(<ViewHeader />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<ViewHeader />)).toMatchSnapshot();
	});

	it('should render the <MemberNav />', () => {
		expect(MockNav).toHaveBeenCalled();
	});
});
