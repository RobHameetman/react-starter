import { fakeNativeInteractionEvent } from '@/utils/types/events/NativeInteractionEvent/__test__';
import { isNativeInteractionEventHandler } from './NativeInteractionEventHandler';
import { mockNativeInteractionEventHandler } from './__test__';

const e = fakeNativeInteractionEvent();

describe('isNativeInteractionEventHandler()', () => {
	it('should return true given a valid NativeInteractionEventHandler', () => {
		expect(
			isNativeInteractionEventHandler(mockNativeInteractionEventHandler(), e),
		).toBe(true);
	});

	it('should return false given an invalid NativeInteractionEventHandler', () => {
		expect(isNativeInteractionEventHandler((() => null)(), e)).toBe(false);
	});
});
