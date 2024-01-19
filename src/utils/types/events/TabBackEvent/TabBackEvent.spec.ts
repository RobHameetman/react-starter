import { isTabBackEvent } from './TabBackEvent';
import { fakeTabBackEvent } from './__test__';

describe('isTabBackEvent()', () => {
	it('should return true given a valid TabBackEvent', () => {
		expect(isTabBackEvent(fakeTabBackEvent())).toBe(true);
	});

	it('should return false given an invalid TabBackEvent', () => {
		expect(isTabBackEvent(fakeTabBackEvent({ shiftKey: false }))).toBe(false);
	});
});
