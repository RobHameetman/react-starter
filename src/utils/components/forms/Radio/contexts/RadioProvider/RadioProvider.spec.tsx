import { render } from '@testing-library/react';
import { RadioProvider } from './RadioProvider';

describe('<RadioProvider />', () => {
	it('should render', () => {
		expect(() => render(<RadioProvider />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<RadioProvider />)).toMatchSnapshot();
	});
});
