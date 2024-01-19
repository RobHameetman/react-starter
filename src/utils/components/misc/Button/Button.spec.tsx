import { render } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
	it('should render', async () => {
		expect(() => render(<Button />)).not.toThrowError();
	});

	it('should match the current snapshot', async () => {
		expect(render(<Button />)).toMatchSnapshot();
	});
});
