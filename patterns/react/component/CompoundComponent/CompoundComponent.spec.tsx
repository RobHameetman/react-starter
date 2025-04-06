import { render } from '@testing-library/react';
import { CompoundComponent } from './CompoundComponent';

describe('<CompoundComponent />', () => {
	it('should render', () => {
		expect(() => render(<CompoundComponent />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<CompoundComponent />)).toMatchSnapshot();
	});
});
