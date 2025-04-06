/* eslint-disable @typescript-eslint/naming-convention */
import { Routes } from './Routes';

jest.mock('@/auth', () => {
	return {
		__esModule: true,
		useAuth: jest.fn(() => () => ({
			loading: false,
			error: false,
		})),
	};
});

describe('<Routes />', () => {
	it('should render the <HomeView /> at /', () => {
		expect(<Routes />).toHaveRoute('/', 'HomeView');
	});

	it('should render a default route', () => {
		expect(<Routes />).toHaveRoute('*');
	});
});
