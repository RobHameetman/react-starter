/* eslint-disable @typescript-eslint/naming-convention */
import { render } from '@testing-library/react';
import { MenuProvider } from './MenuProvider';
import { value } from './__test__';

describe('<MenuProvider />', () => {
	it('should render', async () => {
		expect(() => render(<MenuProvider value={value} />)).not.toThrowError();
	});

	it('should match the current snapshot', async () => {
		expect(render(<MenuProvider value={value} />)).toMatchSnapshot();
	});
});
