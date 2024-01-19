import { render } from '@testing-library/react';
import { CardImage } from './CardImage';

describe('<CardImage />', () => {
	it('should render', () => {
		expect(() => render(<CardImage />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<CardImage />)).toMatchSnapshot();
	});
});
