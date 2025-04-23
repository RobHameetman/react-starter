import { render } from '@testing-library/react';
import { Badge } from './Badge';

describe('<Badge />', () => {
	it('should render', () => {
		expect(() => render(<Badge />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Badge />)).toMatchSnapshot();
	});
});
