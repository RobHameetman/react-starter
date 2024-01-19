import { render } from '@testing-library/react';
import { Input } from './Input';

describe('<Input />', () => {
	it('should render correctly', () => {
		expect(() => render(<Input />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Input />)).toMatchSnapshot();
	});
});
