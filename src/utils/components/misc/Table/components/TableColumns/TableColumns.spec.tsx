import { render } from '@testing-library/react';
import { TableColumns } from './TableColumns';

describe('<TableColumns />', () => {
	it('should render', () => {
		expect(() => render(<TableColumns />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<TableColumns />)).toMatchSnapshot();
	});
});
