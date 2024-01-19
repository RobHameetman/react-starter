import { render } from '@testing-library/react';
import { CardHeader } from './CardHeader';

describe('<CardHeader />', () => {
	it('should render', () => {
		expect(() => render(<CardHeader />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<CardHeader />)).toMatchSnapshot();
	});
});
