import { isVirtualPointerEvent } from './VirtualPointerEvent';
import { fakeVirtualPointerEvent } from './__test__';

describe('isVirtualPointerEvent()', () => {
	it('should return true given a valid VirtualPointerEvent', () => {
		expect(isVirtualPointerEvent(fakeVirtualPointerEvent())).toBe(true);
	});

	it('should return false given an invalid VirtualPointerEvent', () => {
		expect(
			isVirtualPointerEvent(
				fakeVirtualPointerEvent({ size: 1, pointerType: 'touch' }),
			),
		).toBe(false);
	});
});
