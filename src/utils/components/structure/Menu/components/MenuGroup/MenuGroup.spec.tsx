import { render } from '@testing-library/react';
import { MenuGroup } from './MenuGroup';

describe('<MenuGroup />', () => {
	it('should render', () => {
		expect(() => render(<MenuGroup />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<MenuGroup />)).toMatchSnapshot();
	});
});
