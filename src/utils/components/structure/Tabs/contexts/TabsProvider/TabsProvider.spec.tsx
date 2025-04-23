import { renderPage } from '@@/utils/renderPage';
import { TabsProvider } from './TabsProvider';

describe('<TabsProvider />', () => {
	it('should render', () => {
		expect(() => renderPage(<TabsProvider />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(renderPage(<TabsProvider />)).toMatchSnapshot();
	});
});
