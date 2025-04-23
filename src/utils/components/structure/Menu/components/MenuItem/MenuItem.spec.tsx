import { render } from '@testing-library/react';
import { MenuItem } from './MenuItem';

describe('<MenuItem />', () => {
	it('should render', () => {
		expect(() => render(<MenuItem />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<MenuItem />)).toMatchSnapshot();
	});
});
