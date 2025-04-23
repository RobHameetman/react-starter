import { renderPage } from '@@/utils';
import { Page } from './Page';
import { isCompoundComponent } from '../../types';

describe('<Page />', () => {
	it('should render', () => {
		expect(() => renderPage(<Page title="test" />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(renderPage(<Page title="test" />)).toMatchSnapshot();
	});

	it('should be a compound component', () => {
		expect(isCompoundComponent(Page)).toBe(true);
	});
});
