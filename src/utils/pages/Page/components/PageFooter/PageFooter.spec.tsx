import { render } from '@testing-library/react';
import { PageFooter } from './PageFooter';
import { renderAndQueryFooter } from './__test__';

describe('<PageFooter />', () => {
	it('should render', () => {
		expect(() => render(<PageFooter />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<PageFooter />)).toMatchSnapshot();
	});

	it('should be a <footer>', () => {
		expect(renderAndQueryFooter(<PageFooter />)).toBeInTheDocument();
	});
});
