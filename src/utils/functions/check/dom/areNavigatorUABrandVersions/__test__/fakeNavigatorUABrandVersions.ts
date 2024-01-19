import { faker } from '@faker-js/faker';
import { fakeNavigatorUABrandVersion } from '../../isNavigatorUABrandVersion/__test__';

export const fakeNavigatorUABrandVersions = ({ ...overrideProps } = {}) =>
	Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () =>
		fakeNavigatorUABrandVersion(overrideProps),
	) as NavigatorUABrandVersions;
