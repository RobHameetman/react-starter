/* eslint-disable @typescript-eslint/naming-convention */
import { render } from '@testing-library/react';
import { CompoundComponentProvider } from './CompoundComponentProvider';
import { value } from './__test__';

describe('<CompoundComponentProvider />', () => {
	it('should render', async () => {
		expect(() => render(<CompoundComponentProvider value={value} />)).not.toThrowError();
	});

	it('should match the current snapshot', async () => {
		expect(render(<CompoundComponentProvider value={value} />)).toMatchSnapshot();
	});
});
