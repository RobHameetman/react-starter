import { render } from '@testing-library/react';
import { TableCell } from './TableCell';

describe('<TableCell />', () => {
	it('should render', () => {
		expect(() => render(<TableCell />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<TableCell />)).toMatchSnapshot();
	});
});
