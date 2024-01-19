import { render } from '@testing-library/react';
import { FormProvider } from './FormProvider';

describe('FormProvider', () => {
	it('should render correctly', () => {
		expect(() => render(<FormProvider name="test" />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<FormProvider name="test" />)).toMatchSnapshot();
	});
});
