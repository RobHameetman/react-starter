import { faker } from '@faker-js/faker';
import { TableCache } from '../TableCache';
import { fakeTableCacheFilter } from '../../TableCacheFilter/__test__';
import { fakeTableCacheSort } from '../../TableCacheSort/__test__';
import { fakeTableCachePagination } from '../../TableCachePagination/__test__';

export const fakeTableCache = ({
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		name: faker.lorem.words({ min: 1, max: 3 }),
		filter: fakeTableCacheFilter(),
		sort: fakeTableCacheSort(),
		pagination: fakeTableCachePagination(),
		...overrideProps,
	} as TableCache);
