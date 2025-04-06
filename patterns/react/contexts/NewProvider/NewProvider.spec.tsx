/* eslint-disable @typescript-eslint/naming-convention */
import { render } from '@testing-library/react';
import { NewProvider } from './NewProvider';
import { value } from './__test__';

describe('<NewProvider />', () => {
	it('should render', async () => {
		expect(() => render(<NewProvider value={value} />)).not.toThrowError();
	});

	it('should match the current snapshot', async () => {
		expect(render(<NewProvider value={value} />)).toMatchSnapshot();
	});
});
