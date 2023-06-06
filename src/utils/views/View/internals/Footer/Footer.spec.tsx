import { render } from '@testing-library/react';
import { Footer } from './Footer';
import { renderAndQueryFooter } from './__test__';

describe('<Footer />', () => {
	it('should render', () => {
		expect(() => render(<Footer />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<Footer />)).toMatchSnapshot();
	});

	it('should be a <footer>', () => {
		expect(renderAndQueryFooter(<Footer />)).toBeInTheDocument();
	});
});
