import { render } from '@testing-library/react';
import { ViewContent } from './ViewContent';
import { renderAndQueryMain } from './__test__';

describe('<ViewContent />', () => {
	it('should render', () => {
		expect(() => render(<ViewContent />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<ViewContent />)).toMatchSnapshot();
	});

	it('should wrap its children in <main>', () => {
		expect(renderAndQueryMain(<ViewContent />)).toBeInTheDocument();
	});
});
