import { render } from '@testing-library/react';
import { RippleAnimation } from './RippleAnimation';

describe('RippleAnimation', () => {
	it('should render', () => {
		expect(() => render(<RippleAnimation />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(render(<RippleAnimation />)).toMatchSnapshot();
	});
});
