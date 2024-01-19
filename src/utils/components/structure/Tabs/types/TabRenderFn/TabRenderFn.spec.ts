import { isTabRenderFn } from './TabRenderFn';
import { fakeTabRenderFn } from './__test__';

describe('isTabRenderFn()', () => {
	it('should return true given a valid TabRenderFn', () => {
		expect(isTabRenderFn(...fakeTabRenderFn())).toBe(true);
	});

	it('should return false given an invalid TabRenderFn', () => {
		expect(isTabRenderFn(() => {}, ['', false])).toBe(false);
	});
});
