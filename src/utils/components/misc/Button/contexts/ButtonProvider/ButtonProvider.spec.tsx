import { render } from '@testing-library/react';
import { ButtonProvider } from './ButtonProvider';

describe('<ButtonProvider />', () => {
	it('should render', () => {
		expect(() => render(<ButtonProvider />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<ButtonProvider />)).toMatchSnapshot();
	});
});
