import { render, screen } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import { Router } from './Router';

describe('<Router />', () => {
	beforeEach(() => {
		render(
			<Router history={createBrowserHistory()} basename="/">
				foo
			</Router>,
		);
	});

	it('should render', () => {
		expect(screen.getByText('foo')).toBeInTheDocument();
	});
});
