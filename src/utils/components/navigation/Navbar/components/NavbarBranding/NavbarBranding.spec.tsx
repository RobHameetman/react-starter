import { render } from '@testing-library/react';
import { NavbarBranding } from './NavbarBranding';

describe('<NavbarBranding />', () => {
	it('should render', () => {
		expect(() => render(<NavbarBranding />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<NavbarBranding />)).toMatchSnapshot();
	});
});
