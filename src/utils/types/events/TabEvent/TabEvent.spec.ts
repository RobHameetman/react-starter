import { isTabEvent } from './TabEvent';
import { fakeTabEvent } from './__test__';

describe('isTabEvent()', () => {
	it('should return true given a valid TabEvent', () => {
		expect(isTabEvent(fakeTabEvent())).toBe(true);
	});

	it('should return false given an invalid TabEvent', () => {
		expect(isTabEvent(fakeTabEvent({ code: 'Space' }))).toBe(false);
	});
});
