import { isOnFilterFn } from './OnFilterFn';

describe('isOnFilterFn()', () => {
	it('should return true given a valid OnFilterFn', () => {
		expect(isOnFilterFn(() => true)).toBe(true);
	});

	it('should return false given an invalid OnFilterFn', () => {
		expect(isOnFilterFn(() => null)).toBe(false);
	});
});
