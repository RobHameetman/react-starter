import { render } from '@testing-library/react';
import { DropoverTrigger } from './DropoverTrigger';

describe('<DropoverTrigger />', () => {
	it('should render', () => {
		expect(() => render(<DropoverTrigger />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<DropoverTrigger />)).toMatchSnapshot();
	});
});
