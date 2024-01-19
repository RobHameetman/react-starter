import { faker } from '@faker-js/faker';
import { TableStateFeatures } from '../TableStateFeatures';

export const fakeTableStateFeatures = ({
	...overrideProps
}: Record<string, unknown> = {}) =>
	({
		filterable: faker.datatype.boolean(),
		searchable: faker.datatype.boolean(),
		paginated: faker.datatype.boolean(),
		virtual: faker.datatype.boolean(),
		...overrideProps,
	} as TableStateFeatures);
