import { render } from '@testing-library/react';
import { NavbarContent } from './NavbarContent';

describe('<NavbarContent />', () => {
	it('should render', () => {
		expect(() => render(<NavbarContent />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<NavbarContent />)).toMatchSnapshot();
	});
});
