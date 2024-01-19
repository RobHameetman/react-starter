import { isUIEvent } from './isUIEvent';
import { fakeUIEvent } from './__test__';

describe('isUIEvent()', () => {
	it('should return true given a valid UIEvent', () => {
		expect(isUIEvent(fakeUIEvent())).toBe(true);
	});

	it('should return false given an invalid UIEvent', () => {
		expect(isUIEvent(fakeUIEvent({ detail: {} }))).toBe(false);
	});
});
