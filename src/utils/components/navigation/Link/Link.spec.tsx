import { render } from '@testing-library/react';
import { Link } from './Link';

describe('<Link />', () => {
	it('should render', () => {
		expect(() => render(<Link />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Link />)).toMatchSnapshot();
	});
});
