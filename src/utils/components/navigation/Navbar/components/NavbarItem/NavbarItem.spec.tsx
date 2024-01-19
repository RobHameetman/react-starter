import { render } from '@testing-library/react';
import { NavbarItem } from './NavbarItem';

describe('<NavbarItem />', () => {
	it('should render', () => {
		expect(() => render(<NavbarItem />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<NavbarItem />)).toMatchSnapshot();
	});
});
