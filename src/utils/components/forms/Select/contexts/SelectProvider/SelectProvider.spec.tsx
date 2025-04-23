/* eslint-disable @typescript-eslint/naming-convention */
import { render } from '@testing-library/react';
import { SelectProvider } from './SelectProvider';
import { value } from './__test__';

describe('<SelectProvider />', () => {
	it('should render', async () => {
		expect(() => render(<SelectProvider value={value} />)).not.toThrowError();
	});

	it('should match the current snapshot', async () => {
		expect(render(<SelectProvider value={value} />)).toMatchSnapshot();
	});
});
