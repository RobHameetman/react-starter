import { render } from '@testing-library/react';
import { FilterBy } from './FilterBy';

describe('<FilterBy />', () => {
	it('should render', () => {
		expect(() => render(<FilterBy options={[]} onFilter={jest.fn()} />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<FilterBy options={[]} onFilter={jest.fn()} />)).toMatchSnapshot();
	});
});
