import { render } from '@testing-library/react';
import { CatchError } from './CatchError';

describe('<CatchError />', () => {
	it('should render', async () => {
		expect(() => render(<CatchError />)).not.toThrowError();
	});

	it('should match the current snapshot', async () => {
		expect(render(<CatchError />)).toMatchSnapshot();
	});
});
