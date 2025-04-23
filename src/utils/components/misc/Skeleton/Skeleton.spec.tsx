import { render } from '@testing-library/react';
import { Skeleton } from './Skeleton';

describe('<Skeleton />', () => {
	it('should render', () => {
		expect(() => render(<Skeleton />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Skeleton />)).toMatchSnapshot();
	});
});
