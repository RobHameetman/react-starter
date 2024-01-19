import { faker } from '@faker-js/faker';
import { TableState } from '../TableState';
import { fakeTableCache } from '../../TableCache/__test__';
import { fakeTableStateData } from '../../TableStateData/__test__';
import { fakeTableStateFeatures } from '../../TableStateFeatures/__test__';
import { fakeTableStateFilter } from '../../TableStateFilter/__test__';
import { fakeTableStateSort } from '../../TableStateSort/__test__';

export const fakeTableState = ({
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		...fakeTableCache(),
		columns: faker.number.int({ min: 1, max: 10 }),
		data: fakeTableStateData(),
		features: fakeTableStateFeatures(),
		filter: fakeTableStateFilter(),
		loading: faker.datatype.boolean(),
		sort: fakeTableStateSort(),
		...overrideProps,
	} as TableState);
