import { isTabsRenderFn } from './TabsRenderFn';
import { fakeTabsRenderFn } from './__test__';

describe('isTabsRenderFn()', () => {
	it('should return true given a valid TabsRenderFn', () => {
		expect(isTabsRenderFn(...fakeTabsRenderFn())).toBe(true);
	});

	it('should return false given an invalid TabsRenderFn', () => {
		expect(isTabsRenderFn(() => {}, [null, 0, () => {}])).toBe(false);
	});
});
