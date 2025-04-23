import { render } from '@testing-library/react';
import { TablePagination } from './TablePagination';

describe('<TablePagination />', () => {
	it('should render', () => {
		expect(() => render(<TablePagination />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<TablePagination />)).toMatchSnapshot();
	});
});
