import { renderView } from '@test/utils/renderView';
import { TabsProvider } from './TabsProvider';

describe('<TabsProvider />', () => {
	it('should render', () => {
		expect(() => renderView(<TabsProvider />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(renderView(<TabsProvider />)).toMatchSnapshot();
	});
});
