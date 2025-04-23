import { render } from '@testing-library/react';
import { SearchMatch } from './SearchMatch';

describe('<SearchMatch />', () => {
	it('should render', () => {
		expect(() => render(<SearchMatch />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<SearchMatch />)).toMatchSnapshot();
	});
});
