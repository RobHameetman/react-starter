import { render } from '@testing-library/react';
import { Inbox } from './Inbox';

describe('<Inbox />', () => {
	it('should render', () => {
		expect(() => render(<Inbox />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<Inbox />)).toMatchSnapshot();
	});
});
