import { render } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('<Avatar />', () => {
	it('should render', () => {
		expect(() => render(<Avatar />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Avatar />)).toMatchSnapshot();
	});
});
