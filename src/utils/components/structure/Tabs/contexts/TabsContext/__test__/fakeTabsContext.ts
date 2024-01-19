import { faker } from '@faker-js/faker';

export const fakeTabsContext = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const tabs = Array.from({
		length: faker.number.int({ min: 1, max: 10 }),
	}).map(() => faker.lorem.words(faker.number.int({ min: 1, max: 5 })));

	const currentTab = faker.number.int({ min: 0, max: tabs.length - 1 });

	return {
		currentTab,
		currentTabName: tabs[currentTab],
		param: faker.lorem.word().toLowerCase(),
		portalRef: { current: null },
		selectorOffset: faker.number.int({ min: 0, max: 1000 }),
		selectorWidth: faker.number.int({ min: 50, max: 150 }),
		tabs,
		handleChangeTab: jest.fn(),
		setSelectorOffset: jest.fn(),
		setSelectorWidth: jest.fn(),
		setTabs: jest.fn(),
		...overrideProps,
	};
};
