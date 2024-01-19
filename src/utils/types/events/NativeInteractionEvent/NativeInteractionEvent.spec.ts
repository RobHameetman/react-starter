import { isNativeInteractionEvent } from './NativeInteractionEvent';
import { fakeNativeInteractionEvent } from './__test__';

describe('isNativeInteractionEvent()', () => {
	it('should return true given a valid NativeInteractionEvent', () => {
		expect(isNativeInteractionEvent(fakeNativeInteractionEvent())).toBe(true);
	});

	it('should return false given an invalid NativeInteractionEvent', () => {
		expect(
			isNativeInteractionEvent(
				fakeNativeInteractionEvent({ type: 'transitionstart' }),
			),
		).toBe(false);
	});
});
