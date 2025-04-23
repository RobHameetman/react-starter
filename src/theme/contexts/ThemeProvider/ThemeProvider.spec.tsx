/* eslint-disable @typescript-eslint/naming-convention */
import { render } from '@testing-library/react';
import { ThemeProvider } from './ThemeProvider';

describe('<ThemeProvider />', () => {
	it('should render', () => {
		expect(() => render(<ThemeProvider />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<ThemeProvider />)).toMatchSnapshot();
	});
});
