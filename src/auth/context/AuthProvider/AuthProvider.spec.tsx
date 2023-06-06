import { render, cleanup } from '@testing-library/react';
import { AuthProvider } from './AuthProvider';

describe('<AuthProvider />', () => {
	beforeEach(() => {
		jest.mock('../AuthContext', () => ({
			/* eslint-disable-next-line @typescript-eslint/naming-convention */
			__esModule: true,
			INITIAL_AUTH_CONTEXT: {
				/**
				 * @TODO
				 */
			},
		}));
	});

	afterEach(() => {
		cleanup();
	});

	it('should render', async () => {
		await expect(render(<AuthProvider value="" />)).not.toThrowError();
	});
});
