import { isArrowLeftEvent } from './ArrowLeftEvent';
import { fakeArrowLeftEvent } from './__test__';

describe('isArrowLeftEvent()', () => {
	it('should return true given a valid ArrowLeftEvent', () => {
		expect(isArrowLeftEvent(fakeArrowLeftEvent())).toBe(true);
	});

	it('should return false given an invalid ArrowLeftEvent', () => {
		expect(isArrowLeftEvent(fakeArrowLeftEvent({ code: 'Space' }))).toBe(false);
	});
});
