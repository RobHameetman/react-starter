import { render } from '@testing-library/react';
import { TableRows } from './TableRows';

describe('<TableRows />', () => {
	it('should render', () => {
		expect(() => render(<TableRows each={jest.fn()} />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<TableRows each={jest.fn()} />)).toMatchSnapshot();
	});
});
