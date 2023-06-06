import { renderView } from '@test/utils';
import { View } from './View';
import { isCompoundComponent } from '../../types';

describe('<View />', () => {
	it('should render', () => {
		expect(() => renderView(<View title="test" />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(renderView(<View title="test" />)).toMatchSnapshot();
	});

	it('should be a compound component', () => {
		expect(isCompoundComponent(View)).toBe(true);
	});
});
