import { render } from '@testing-library/react';
import { LoadingElipsisAnimation } from './LoadingElipsisAnimation';

describe('LoadingElipsisAnimation', () => {
	it('should render', () => {
		expect(() => render(<LoadingElipsisAnimation />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(render(<LoadingElipsisAnimation />)).toMatchSnapshot();
	});
});
