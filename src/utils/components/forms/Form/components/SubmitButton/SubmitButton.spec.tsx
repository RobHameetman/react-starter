import { render } from '@testing-library/react';
import { SubmitButton } from './SubmitButton';

describe('<SubmitButton />', () => {
	it('should render', () => {
		expect(() => render(<SubmitButton />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<SubmitButton />)).toMatchSnapshot();
	});
});
