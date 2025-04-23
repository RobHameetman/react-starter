/* eslint-disable @typescript-eslint/naming-convention */
import { render } from '@testing-library/react';
import { PageProvider } from './PageProvider';

describe('<PageProvider />', () => {
	it('should render', async () => {
		expect(() => render(<PageProvider />)).not.toThrowError();
	});

	it('should match the current snapshot', async () => {
		expect(render(<PageProvider />)).toMatchSnapshot();
	});
});
