import { render } from '@testing-library/react';
import { CloseButton } from './CloseButton';

describe('<CloseButton />', () => {
	it('should render', () => {
		expect(() => render(<CloseButton />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<CloseButton />)).toMatchSnapshot();
	});
});
