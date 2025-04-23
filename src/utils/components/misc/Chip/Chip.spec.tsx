import { render } from '@testing-library/react';
import { Chip } from './Chip';

describe('<Chip />', () => {
	it('should render', () => {
		expect(() => render(<Chip />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Chip />)).toMatchSnapshot();
	});
});
