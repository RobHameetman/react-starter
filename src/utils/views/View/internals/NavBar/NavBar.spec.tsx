/* eslint-disable @typescript-eslint/naming-convention */
import { FC } from 'react';
import { render } from '@testing-library/react';
import { NavBar } from './NavBar';

let MockNav: jest.Mock | undefined;

jest.mock('@host/nav', () => {
	MockNav = jest.fn((({ children }) => <>{children}</>) as FC);

	return {
		__esModule: true,
		MemberNav: MockNav,
	};
});

describe('<NavBar />', () => {
	it('should render', () => {
		expect(() => render(<NavBar />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<NavBar />)).toMatchSnapshot();
	});

	it('should render the <MemberNav />', () => {
		expect(MockNav).toHaveBeenCalled();
	});
});
