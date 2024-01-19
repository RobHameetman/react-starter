import { render } from '@testing-library/react';
import { CardFooter } from './CardFooter';

describe('<CardFooter />', () => {
	it('should render', () => {
		expect(() => render(<CardFooter />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<CardFooter />)).toMatchSnapshot();
	});
});
