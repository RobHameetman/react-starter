import { render } from '@testing-library/react';
import { TableBody } from './TableBody';

describe('<TableBody />', () => {
	it('should render', () => {
		expect(() => render(<TableBody width="sm" />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<TableBody width="sm" />)).toMatchSnapshot();
	});
});
