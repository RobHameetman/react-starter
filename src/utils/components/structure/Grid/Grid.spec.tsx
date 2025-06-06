import { render } from '@testing-library/react';
import { Grid } from './Grid';

describe('<Grid />', () => {
	it('should render', () => {
		expect(() => render(<Grid />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Grid />)).toMatchSnapshot();
	});
});
