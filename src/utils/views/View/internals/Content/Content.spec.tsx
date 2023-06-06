import { render } from '@testing-library/react';
import { Content } from './Content';
import { renderAndQueryMain } from './__test__';

describe('<Content />', () => {
	it('should render', () => {
		expect(() => render(<Content />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<Content />)).toMatchSnapshot();
	});

	it('should wrap its children in <main>', () => {
		expect(renderAndQueryMain(<Content />)).toBeInTheDocument();
	});
});
