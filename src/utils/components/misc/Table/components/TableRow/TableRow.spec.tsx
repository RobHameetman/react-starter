import { render } from '@testing-library/react';
import { TableRow } from './TableRow';

describe('<TableRow />', () => {
	it('should render', () => {
		expect(() => render(<TableRow />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<TableRow />)).toMatchSnapshot();
	});
});
