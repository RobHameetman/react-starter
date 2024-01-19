import { render } from '@testing-library/react';
import { CardBody } from './CardBody';

describe('<CardBody />', () => {
	it('should render', () => {
		expect(() => render(<CardBody />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(() => render(<CardBody />)).toMatchSnapshot();
	});
});
