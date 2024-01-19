import { faker } from '@faker-js/faker';

export const fakePositionable = ({
	contained = false,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const positionable: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		positionable.x = contained
			? faker.number.int({ min: 0 })
			: faker.number.int();
	});

	faker.helpers.maybe(() => {
		positionable.y = contained
			? faker.number.int({ min: 0 })
			: faker.number.int();
	});

	return {
		...positionable,
		...overrideProps,
	};
};
