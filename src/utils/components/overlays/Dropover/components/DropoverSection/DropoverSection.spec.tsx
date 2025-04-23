import { render } from '@testing-library/react';
import { DropoverSection } from './DropoverSection';

describe('<DropoverSection />', () => {
	it('should render', () => {
		expect(() => render(<DropoverSection />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<DropoverSection />)).toMatchSnapshot();
	});
});
