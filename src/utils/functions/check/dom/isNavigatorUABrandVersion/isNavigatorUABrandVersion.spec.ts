import { isNavigatorUABrandVersion } from './isNavigatorUABrandVersion';
import { fakeNavigatorUABrandVersion } from './__test__';

describe('isNavigatorUABrandVersion()', () => {
	it('should return true given a valid NavigatorUABrandVersion', () => {
		expect(isNavigatorUABrandVersion(fakeNavigatorUABrandVersion())).toBe(true);
	});

	it('should return false given an invalid NavigatorUABrandVersion', () => {
		expect(
			isNavigatorUABrandVersion(
				fakeNavigatorUABrandVersion({
					brand: 'This string is longer than what is allowed by the spec',
				}),
			),
		).toBe(false);
	});
});
