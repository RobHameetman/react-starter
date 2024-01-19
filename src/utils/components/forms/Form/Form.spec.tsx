import { render } from '@testing-library/react';
import { Form } from './Form';

describe('<Form />', () => {
	it('should render correctly', () => {
		expect(() => render(<Form name="test" />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Form name="test" />)).toMatchSnapshot();
	});
});
