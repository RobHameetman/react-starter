import { render } from '@testing-library/react';
import { Overlay } from './Overlay';

describe('Overlay', () => {
	it('should render correctly', () => {
		expect(() => render(<Overlay />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Overlay />)).toMatchSnapshot();
	});
});
