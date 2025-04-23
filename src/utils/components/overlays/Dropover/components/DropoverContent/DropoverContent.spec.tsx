import { render } from '@testing-library/react';
import { DropoverContent } from './DropoverContent';

describe('<DropoverContent />', () => {
	it('should render', () => {
		expect(() => render(<DropoverContent />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<DropoverContent />)).toMatchSnapshot();
	});
});
