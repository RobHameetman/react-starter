import { render } from '@testing-library/react';
import { Menu } from './Menu';

describe('<Menu />', () => {
	it('should render', () => {
		expect(() => render(<Menu />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Menu />)).toMatchSnapshot();
	});
});
