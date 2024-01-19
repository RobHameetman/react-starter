import { render } from '@testing-library/react';
import { CheckboxProvider } from './CheckboxProvider';

describe('<CheckboxProvider />', () => {
	it('should render', () => {
		expect(() => render(<CheckboxProvider />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<CheckboxProvider />)).toMatchSnapshot();
	});
});
