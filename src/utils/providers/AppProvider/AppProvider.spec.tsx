/* eslint-disable @typescript-eslint/naming-convention */
import { render } from '@testing-library/react';
import { AppProvider } from './AppProvider';
import { history } from './__test__';

let MockAuthProvider: jest.Mock | undefined;

jest.mock('../../../auth', () => {
	MockAuthProvider = jest.fn(({ children }) => <>{children}</>);

	return {
		__esModule: true,
		AuthProvider: MockAuthProvider,
		createAuthRedirectCallback: jest.fn(),
	};
});

describe('<AppProvider />', () => {
	it('should render', async () => {
		expect(() => render(<AppProvider history={history} />)).not.toThrowError();
	});

	it('should match the current snapshot', async () => {
		expect(render(<AppProvider history={history} />)).toMatchSnapshot();
	});

	it('should authenticate the user', () => {
		expect(MockAuthProvider).toHaveBeenCalled();
	});
});
