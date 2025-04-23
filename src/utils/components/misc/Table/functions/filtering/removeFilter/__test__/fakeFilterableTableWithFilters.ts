import { faker } from '@faker-js/faker';
import { fakeFilterableTable } from '../../isFilterable/__test__';

export const fakeFilterableTableWithFilters = ({
	...overrideProperties
}: Record<string, unknown> = {}) =>
	fakeFilterableTable({
		...overrideProperties,
		filterBy: {
			...(overrideProperties.features as Record<string, unknown>),
			filterBy: ['color', 'make', 'model', 'type', 'vim'].slice(
				0,
				faker.number.int({ min: 1, max: 4 }),
			),
		},
	});
