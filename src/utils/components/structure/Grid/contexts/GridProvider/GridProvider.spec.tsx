/* eslint-disable @typescript-eslint/naming-convention */
import { render } from '@testing-library/react';
import { GridProvider } from './GridProvider';
import { value } from './__test__';

describe('<GridProvider />', () => {
	it('should render', async () => {
		expect(() => render(<GridProvider value={value} />)).not.toThrowError();
	});

	it('should match the current snapshot', async () => {
		expect(render(<GridProvider value={value} />)).toMatchSnapshot();
	});
});
