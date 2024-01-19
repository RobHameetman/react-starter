import { render } from '@testing-library/react';
import { FormButtons } from './FormButtons';

describe('<FormButtons />', () => {
	it('should render', () => {
		expect(() => render(<FormButtons />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<FormButtons />)).toMatchSnapshot();
	});
});
