import { render } from '@testing-library/react';
import { TableColumn } from './TableColumn';

describe('<TableColumn />', () => {
	it('should render', () => {
		expect(() => render(<TableColumn />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<TableColumn />)).toMatchSnapshot();
	});
});
