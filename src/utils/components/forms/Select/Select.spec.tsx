import { render } from '@testing-library/react';
import { Select } from './Select';

describe('<Select />', () => {
	it('should render', () => {
		expect(() => render(<Select />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Select />)).toMatchSnapshot();
	});
});
