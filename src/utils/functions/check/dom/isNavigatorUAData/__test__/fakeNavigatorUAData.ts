import { faker } from '@faker-js/faker';
import { fakeNavigatorUABrandVersions } from '../../areNavigatorUABrandVersions/__test__';

export const fakeNavigatorUAData = ({
	instance = typeof window !== 'undefined' && 'NavigatorUAData' in window,
	...overrideProps
}: Record<string, unknown> = {}) => {
	const brands = fakeNavigatorUABrandVersions();
	const mobile = faker.datatype.boolean();
	const platform = faker.word.noun();
	const getHighEntropyValues = jest.fn();
	const toJSON = jest.fn();

	let navigatorUAData = {} as NavigatorUAData;

	if (instance) {
		Object.defineProperty(navigatorUAData, 'brands', {
			value: brands,
			writable: false,
		});

		Object.defineProperty(navigatorUAData, 'mobile', {
			value: mobile,
			writable: false,
		});

		Object.defineProperty(navigatorUAData, 'platform', {
			value: platform,
			writable: false,
		});

		Object.entries(overrideProps).forEach(([key, value]) => {
			Object.defineProperty(navigatorUAData, key, {
				value,
				writable: false,
			});
		});
	} else {
		navigatorUAData = {
			brands,
			mobile,
			platform,
			getHighEntropyValues: jest.fn(),
			toJSON: jest.fn(),
			...overrideProps,
		};
	}

	return navigatorUAData;
};
