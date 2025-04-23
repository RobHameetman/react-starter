import { faker } from '@faker-js/faker';
import { fakeTableState } from '../../../../state/TableState/__test__';

export const fakeTableWithBuffer = ({
	...overrideProperties
}: Record<string, unknown> = {}) =>
	fakeTableState({
		...overrideProperties,
		data: {
			...(overrideProperties.data as Record<string, unknown>),
			buffer: Array.from(
				{
					length: faker.number.int({ min: 2, max: 100 }),
				},
				() => ({
					color: faker.vehicle.color(),
					make: faker.vehicle.manufacturer(),
					model: faker.vehicle.model(),
					type: faker.vehicle.type(),
					vin: faker.vehicle.vin(),
				}),
			),
		},
	});
