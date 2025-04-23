/* eslint-disable @typescript-eslint/naming-convention */
import { $FC } from 'react';
import { render } from '@testing-library/react';
import { PageHeader } from './PageHeader';

let MockNav: jest.Mock | undefined;

jest.mock('@host/nav', () => {
	MockNav = jest.fn((({ children }) => <>{children}</>) as $FC);

	return {
		__esModule: true,
		Nav: MockNav,
	};
});

describe('<PageHeader />', () => {
	it('should render', () => {
		expect(() => render(<PageHeader />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<PageHeader />)).toMatchSnapshot();
	});

	it('should render the <MemberNav />', () => {
		expect(MockNav).toHaveBeenCalled();
	});
});
