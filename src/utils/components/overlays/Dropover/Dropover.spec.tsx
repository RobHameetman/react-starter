import { render } from '@testing-library/react';
import { NewComponent } from './Dropover';

describe('<NewComponent />', () => {
	it('should render', () => {
		expect(() => render(<NewComponent />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<NewComponent />)).toMatchSnapshot();
	});
});
