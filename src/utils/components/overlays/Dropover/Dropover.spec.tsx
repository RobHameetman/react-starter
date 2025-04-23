import { render } from '@testing-library/react';
import { Dropover } from './Dropover';

describe('<Dropover />', () => {
	it('should render', () => {
		expect(() => render(<Dropover />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Dropover />)).toMatchSnapshot();
	});
});
