import { render } from '@testing-library/react';
import { TableToolbar } from './TableToolbar';

describe('<TableToolbar />', () => {
	it('should render', () => {
		expect(() => render(<TableToolbar />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<TableToolbar />)).toMatchSnapshot();
	});
});
