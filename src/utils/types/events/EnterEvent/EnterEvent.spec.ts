import { isEnterEvent } from './EnterEvent';
import { fakeEnterEvent } from './__test__';

describe('isEnterEvent()', () => {
	it('should return true given a valid EnterEvent', () => {
		expect(isEnterEvent(fakeEnterEvent())).toBe(true);
	});

	it('should return false given an invalid EnterEvent', () => {
		expect(isEnterEvent(fakeEnterEvent({ code: 'Space' }))).toBe(false);
	});
});
