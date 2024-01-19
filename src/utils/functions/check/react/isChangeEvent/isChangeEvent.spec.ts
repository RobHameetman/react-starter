import { isChangeEvent } from './isChangeEvent';
import { fakeChangeEvent } from './__test__';

describe('isChangeEvent()', () => {
	it('should return true given a valid ChangeEvent', () => {
		expect(isChangeEvent(fakeChangeEvent())).toBe(true);
	});

	it('should return false given an invalid ChangeEvent', () => {
		expect(isChangeEvent(fakeChangeEvent({ type: '' }))).toBe(false);
	});
});
