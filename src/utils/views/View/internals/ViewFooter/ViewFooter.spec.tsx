import { render } from '@testing-library/react';
import { ViewFooter } from './ViewFooter';
import { renderAndQueryFooter } from './__test__';

describe('<ViewFooter />', () => {
	it('should render', () => {
		expect(() => render(<ViewFooter />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<ViewFooter />)).toMatchSnapshot();
	});

	it('should be a <footer>', () => {
		expect(renderAndQueryFooter(<ViewFooter />)).toBeInTheDocument();
	});
});
