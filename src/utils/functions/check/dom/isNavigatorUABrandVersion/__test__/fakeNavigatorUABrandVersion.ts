import { faker } from '@faker-js/faker';

export const fakeNavigatorUABrandVersion = ({ ...overrideProps } = {}) => {
	const navigatorUABrandVersion = {
		brand: faker.string.alpha({ length: { min: 1, max: 31 } }),
		version: faker.number.int({ min: 1, max: 900 }),
		...overrideProps,
	} as Record<string, unknown>;

	return {
		...navigatorUABrandVersion,
		...overrideProps,
	} as NavigatorUABrandVersion;
};
