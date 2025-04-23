import { render } from '@testing-library/react';
import { PageContent } from './PageContent';
import { renderAndQueryMain } from './__test__';

describe('<PageContent />', () => {
	it('should render', () => {
		expect(() => render(<PageContent />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<PageContent />)).toMatchSnapshot();
	});

	it('should wrap its children in <main>', () => {
		expect(renderAndQueryMain(<PageContent />)).toBeInTheDocument();
	});
});
