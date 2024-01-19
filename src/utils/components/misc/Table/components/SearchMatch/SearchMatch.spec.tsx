import React from 'react';
import { render } from '@testing-library/react';
import { SearchMatch } from '../../../../../../modules';

describe('SearchMatch', (): void => {
	let html: string | undefined;
	let error: Error | null = null;

	beforeEach((): void => {
		try {
			const { container } = render(<SearchMatch />);

			html = container.innerHTML;
		} catch (err) {
			error = err;
		}
	});

	afterEach((): void => {
		html = undefined;
		error = null;
	});

	it('should render', async (): Promise<void> => {
		expect(html).not.toBeNull();
		expect(error).toBeNull();
	});

	it('should not regress', async (): Promise<void> => {
		expect(html).toMatchSnapshot();
	});
});
