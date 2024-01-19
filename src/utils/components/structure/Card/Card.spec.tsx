import { render } from '@testing-library/react';
import { Card } from './Card';

describe('<Card />', () => {
	it('should render', () => {
		expect(() => render(<Card />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<Card />)).toMatchSnapshot();
	});
});
