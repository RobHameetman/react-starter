import { faker } from '@faker-js/faker';

export const fakeAccessible = ({
	...overrideProps
}: Record<string, unknown> = {}) => {
	const accessible: Record<string, unknown> = {};

	faker.helpers.maybe(() => {
		accessible.tabIndex = faker.number.int({ min: -1, max: 0 });
	});

	return {
		...accessible,
		...overrideProps,
	};
};
