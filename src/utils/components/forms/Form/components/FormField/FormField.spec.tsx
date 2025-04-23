import { render } from '@testing-library/react';
import { FormField } from './FormField';

const Input = jest.fn(() => <input />);

describe('<FormField />', () => {
	it('should render', () => {
		expect(() => render(<FormField name="test" as={Input} />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<FormField name="test" as={Input} />)).toMatchSnapshot();
	});
});
