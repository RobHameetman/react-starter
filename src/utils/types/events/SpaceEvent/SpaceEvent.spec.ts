import { isSpaceEvent } from './SpaceEvent';
import { fakeSpaceEvent } from './__test__';

describe('isSpaceEvent()', () => {
	it('should return true given a valid SpaceEvent', () => {
		expect(isSpaceEvent(fakeSpaceEvent())).toBe(true);
	});

	it('should return false given an invalid SpaceEvent', () => {
		expect(isSpaceEvent(fakeSpaceEvent({ code: 'Enter' }))).toBe(false);
	});
});
