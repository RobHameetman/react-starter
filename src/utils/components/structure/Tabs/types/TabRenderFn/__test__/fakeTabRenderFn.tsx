import { faker } from '@faker-js/faker';
import { TabRenderFn } from '../TabRenderFn';

export const fakeTabRenderFn = (): [TabRenderFn, [string, boolean]] => {
	const renderTabs = ((name: string, _selected: boolean) =>
		<>{name}</>) as TabRenderFn;

	return [renderTabs, [faker.lorem.word(), faker.datatype.boolean()]];
};
