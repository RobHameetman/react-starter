import { render } from '@testing-library/react';
import { DropoverMenu } from './DropoverMenu';

describe('<DropoverMenu />', () => {
	it('should render', () => {
		expect(() => render(<DropoverMenu />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<DropoverMenu />)).toMatchSnapshot();
	});
});
