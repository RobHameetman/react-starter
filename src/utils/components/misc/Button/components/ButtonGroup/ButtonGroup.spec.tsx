import { render } from '@testing-library/react';
import { ButtonGroup } from './ButtonGroup';

describe('<ButtonGroup />', () => {
	it('should render', () => {
		expect(() => render(<ButtonGroup />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<ButtonGroup />)).toMatchSnapshot();
	});
});
