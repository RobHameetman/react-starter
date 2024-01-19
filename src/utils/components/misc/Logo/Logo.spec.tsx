import { render } from '@testing-library/react';
import { Logo } from './Logo';

describe('<Logo />', () => {
	it('should render', () => {
		expect(() => render(<Logo />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<Logo />)).toMatchSnapshot();
	});
});
