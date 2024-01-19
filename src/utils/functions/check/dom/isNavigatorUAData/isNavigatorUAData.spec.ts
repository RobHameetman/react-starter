import { isNavigatorUAData } from './isNavigatorUAData';
import { fakeNavigatorUAData } from './__test__';

describe('isNavigatorUAData()', () => {
	it('should return true given a valid NavigatorUAData', () => {
		expect(isNavigatorUAData(fakeNavigatorUAData())).toBe(true);
	});

	it('should return false given an invalid NavigatorUAData', () => {
		expect(isNavigatorUAData(fakeNavigatorUAData({ brands: null }))).toBe(
			false,
		);
	});
});
