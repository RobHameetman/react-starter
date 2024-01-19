import { isTableCache } from './TableCache';
import { fakeTableCache } from './__test__';

describe('isTableCache()', () => {
	it('should return true given a valid TableCache', () => {
		expect(isTableCache(fakeTableCache())).toBe(true);
	});

	it('should return false given an invalid TableCache', () => {
		expect(isTableCache(fakeTableCache({ name: '' }))).toBe(false);
	});
});
