import { render } from '@testing-library/react';
import { CatchError } from './CatchError';

describe('<CatchError />', () => {
	it('should render', () => {
		expect(() => render(<CatchError />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<CatchError />)).toMatchSnapshot();
	});
});
