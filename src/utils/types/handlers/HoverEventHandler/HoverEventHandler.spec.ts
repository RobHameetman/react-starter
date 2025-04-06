import { fakeHoverEvent } from '@/utils/types/events/HoverEvent/__test__';
import { isHoverEventHandler } from './HoverEventHandler';
import { mockHoverEventHandler } from './__test__';

const e = fakeHoverEvent();

describe('isHoverEventHandler()', () => {
	it('should return true given a valid HoverEventHandler', () => {
		expect(isHoverEventHandler(mockHoverEventHandler(), e)).toBe(true);
	});

	it('should return false given an invalid HoverEventHandler', () => {
		expect(isHoverEventHandler((() => null)(), e)).toBe(false);
	});
});
