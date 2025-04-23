/* eslint-disable prettier/prettier */

import { render } from '@@/utils/render';
import { DoubleChevronRightIcon as Icon } from './DoubleChevronRightIcon';

describe('<DoubleChevronRightIcon />', () => {
	it('should render', () => {
		expect(() => render(<Icon />)).not.toThrowError();
	});

	it('should not regress', () => {
		expect(render(<Icon />)).toMatchSnapshot();
	});

	it('should have a role of "img"', () => {
		expect(render(<Icon />)).toHaveAttribute('role', 'img');
	});

	it('should have a correct aria label', () => {
		expect(render(<Icon />)).toHaveAttribute('aria-labelledby', expect.stringContaining('doubleChevronRightIconTitle'));
		expect(render(<Icon />)).toHaveAttribute('aria-labelledby', expect.stringContaining('doubleChevronRightIconDesc'));
	});

	it('should have a title and a description', () => {
		expect(render(<Icon />)).toContainHTML('title');
		expect(render(<Icon />)).toContainHTML('desc');
	});
});
