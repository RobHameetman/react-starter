import { render } from '@testing-library/react';
import { EditButton } from './EditButton';

describe('<EditButton />', () => {
	it('should render', () => {
		expect(() => render(<EditButton />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<EditButton />)).toMatchSnapshot();
	});
});
