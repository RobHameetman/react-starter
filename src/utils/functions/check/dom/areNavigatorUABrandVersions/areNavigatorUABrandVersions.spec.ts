import { areNavigatorUABrandVersions } from './areNavigatorUABrandVersions';
import { fakeNavigatorUABrandVersions } from './__test__';

describe('areNavigatorUABrandVersions()', () => {
	it('should return true given a valid NavigatorUABrandVersions', () => {
		expect(areNavigatorUABrandVersions(fakeNavigatorUABrandVersions())).toBe(
			true,
		);
	});

	it('should return false given invalid NavigatorUABrandVersions', () => {
		expect(
			areNavigatorUABrandVersions(
				fakeNavigatorUABrandVersions({
					brand: 'This string is longer than what is allowed by the spec',
				}),
			),
		).toBe(false);
	});
});
