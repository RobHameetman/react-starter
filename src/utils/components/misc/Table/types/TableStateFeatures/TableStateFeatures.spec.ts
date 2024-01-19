import { isTableStateFeatures } from './TableStateFeatures';
import { fakeTableStateFeatures } from './__test__';

describe('isTableStateFeatures()', () => {
	it('should return true given a valid TableStateFeatures', () => {
		expect(isTableStateFeatures(fakeTableStateFeatures())).toBe(true);
	});

	it('should return false given an invalid TableStateFeatures', () => {
		expect(
			isTableStateFeatures(fakeTableStateFeatures({ virtual: undefined })),
		).toBe(false);
	});
});
