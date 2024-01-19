import { render } from '@testing-library/react';
import { FormField } from './FormField';

const Input = jest.fn(() => <input />);

describe('<FormField />', () => {
	it('should render', () => {
		/* @ts-expect-error - Type 'Mock<ReactElement<any, string | JSXElementConstructor<any>>, any[], any>' is not assignable to type 'ReactElement<unknown, string> | keyof IntrinsicElements | undefined'. */
		expect(() =>
			render(<FormField name="test" as={Input} />),
		).not.toThrowError();
	});

	it('should not regress', () => {
		/* @ts-expect-error - Type 'Mock<ReactElement<any, string | JSXElementConstructor<any>>, any[], any>' is not assignable to type 'ReactElement<unknown, string> | keyof IntrinsicElements | undefined'. */
		expect(() =>
			render(<FormField name="test" as={Input} />),
		).toMatchSnapshot();
	});
});
