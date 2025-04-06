import { render } from '@testing-library/react';
import { GridItem } from './GridItem';

describe('<GridItem />', () => {
	it('should render', () => {
		expect(() => render(<GridItem />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<GridItem />)).toMatchSnapshot();
	});
});
