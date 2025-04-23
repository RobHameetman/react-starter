import { render } from '@testing-library/react';
import { Suspense } from './Suspense';

describe('<Suspense />', () => {
	it('should render', () => {
		expect(() => render(<Suspense />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<Suspense />)).toMatchSnapshot();
	});
});
