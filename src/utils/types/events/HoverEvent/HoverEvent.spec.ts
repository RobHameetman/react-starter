import { isHoverEvent } from './HoverEvent';
import { fakeHoverEvent } from './__test__';

describe('isHoverEvent()', () => {
	it('should return true given a valid HoverEvent', () => {
		expect(isHoverEvent(fakeHoverEvent())).toBe(true);
	});

	it('should return false given an invalid HoverEvent', () => {
		expect(isHoverEvent(fakeHoverEvent({ type: 'mouseup' }))).toBe(false);
	});
});
