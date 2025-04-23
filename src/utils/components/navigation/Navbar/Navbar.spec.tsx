import { render } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('<Navbar />', () => {
	it('should render', () => {
		expect(() => render(<Navbar />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Navbar />)).toMatchSnapshot();
	});
});
