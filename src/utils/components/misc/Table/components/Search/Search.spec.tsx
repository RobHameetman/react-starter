import { render } from '@testing-library/react';
import { Search } from './Search';

describe('<Search />', () => {
	it('should render', () => {
		expect(() => render(<Search searchAgainst={jest.fn()} />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Search searchAgainst={jest.fn()} />)).toMatchSnapshot();
	});
});
