import { render } from '@testing-library/react';
import { Table } from './Table';

describe('<Table />', () => {
	it('should render', () => {
		expect(() => render(<Table name="Test" initialData={[]} sortOptions={{}} />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Table name="Test" initialData={[]} sortOptions={{}} />)).toMatchSnapshot();
	});
});
