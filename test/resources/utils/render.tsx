import { ReactElement } from 'react';
import { render as _render } from '@testing-library/react';

export const render = (Component: ReactElement) => {
	const result = _render(Component);
	const [html] = Array.from(result.container.children);

	return html;
};
