import { render } from '@testing-library/react';
import { AsyncButton } from './AsyncButton';

describe('<AsyncButton />', () => {
	it('should render', () => {
		expect(() => render(<AsyncButton />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<AsyncButton />)).toMatchSnapshot();
	});
});
