import {
	FirstTabContent,
	SecondTabContent,
	renderWithTabsProvider as render,
} from './__test__';
import { Tab } from './components/Tab';
import { Tabs as TestTabs } from './Tabs';

const Tabs = () => (
	<TestTabs>
		<Tab name="First Tab">
			<FirstTabContent />
		</Tab>
		<Tab name="Second Tab">
			<SecondTabContent />
		</Tab>
	</TestTabs>
);

describe('<Tabs />', () => {
	const tabs: unknown = null;

	beforeEach(() => {
		//
	});

	afterEach(() => {
		//
	});

	it('should render', () => {
		expect(() => render(<Tabs />)).not.toThrowError();
	});

	it('should match the current snapshot', () => {
		expect(render(<Tabs />)).toMatchSnapshot();
	});
});
