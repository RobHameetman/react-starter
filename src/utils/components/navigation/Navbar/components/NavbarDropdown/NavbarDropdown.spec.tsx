import { render } from '@testing-library/react';
import { NavbarDropdown } from './NavbarDropdown';

describe('<NavbarDropdown />', () => {
	it('should render', () => {
		expect(() => render(<NavbarDropdown />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<NavbarDropdown />)).toMatchSnapshot();
	});
});
