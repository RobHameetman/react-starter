import { render } from '@testing-library/react';
import { SelectOption } from './SelectOption';

describe('<SelectOption />', () => {
	it('should render', () => {
		expect(() => render(<SelectOption />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<SelectOption />)).toMatchSnapshot();
	});
});
