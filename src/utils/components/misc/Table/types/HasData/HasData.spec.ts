import { isHasData } from './HasData';
import { fakeHasData } from './__test__';

describe('isHasData()', () => {
	it('should return true given a valid implementation of HasData', () => {
		expect(isHasData(fakeHasData())).toBe(true);
	});

	it('should return false given an invalid implementation of HasData', () => {
		expect(isHasData(fakeHasData({ data: { prop: 'test' } }))).toBe(false);
	});
});
