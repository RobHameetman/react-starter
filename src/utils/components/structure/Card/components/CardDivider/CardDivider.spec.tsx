import { render } from '@testing-library/react';
import { CardDivider } from './CardDivider';

describe('<CardDivider />', () => {
	it('should render', () => {
		expect(() => render(<CardDivider />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<CardDivider />)).toMatchSnapshot();
	});
});
