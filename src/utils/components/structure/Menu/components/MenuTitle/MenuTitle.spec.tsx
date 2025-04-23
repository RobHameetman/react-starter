import { render } from '@testing-library/react';
import { MenuTitle } from './MenuTitle';

describe('<MenuTitle />', () => {
	it('should render', () => {
		expect(() => render(<MenuTitle />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<MenuTitle />)).toMatchSnapshot();
	});
});
