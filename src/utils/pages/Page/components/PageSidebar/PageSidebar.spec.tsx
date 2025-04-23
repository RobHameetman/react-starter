import { render } from '@testing-library/react';
import { PageSidebar } from './PageSidebar';
import { renderAndQueryMain } from './__test__';

describe('<PageSidebar />', () => {
	it('should render', () => {
		expect(() => render(<PageSidebar />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<PageSidebar />)).toMatchSnapshot();
	});

	it('should wrap its children in <main>', () => {
		expect(renderAndQueryMain(<PageSidebar />)).toBeInTheDocument();
	});
});
