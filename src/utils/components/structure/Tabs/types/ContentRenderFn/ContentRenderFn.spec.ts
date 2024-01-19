import { isContentRenderFn } from './ContentRenderFn';
import { fakeContentRenderFn } from './__test__';

describe('isContentRenderFn()', () => {
	it('should return true given a valid ContentRenderFn', () => {
		expect(isContentRenderFn(...fakeContentRenderFn())).toBe(true);
	});

	it('should return false given an invalid ContentRenderFn', () => {
		expect(isContentRenderFn(() => {}, { current: null })).toBe(false);
	});
});
