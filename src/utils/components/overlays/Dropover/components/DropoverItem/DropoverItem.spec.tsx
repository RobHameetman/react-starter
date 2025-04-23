import { render } from '@testing-library/react';
import { DropoverItem } from './DropoverItem';

describe('<DropoverItem />', () => {
	it('should render', () => {
		expect(() => render(<DropoverItem />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<DropoverItem />)).toMatchSnapshot();
	});
});
