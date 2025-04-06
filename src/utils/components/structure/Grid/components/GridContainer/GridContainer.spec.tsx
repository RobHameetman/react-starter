import { render } from '@testing-library/react';
import { GridContainer } from './GridContainer';

describe('<GridContainer />', () => {
	it('should render', () => {
		expect(() => render(<GridContainer />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<GridContainer />)).toMatchSnapshot();
	});
});
