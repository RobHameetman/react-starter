import { fakeEnterEvent } from '@/utils/types/events/EnterEvent/__test__';
import { isArrowRightEventHandler } from './ArrowRightEventHandler';
import { mockArrowRightEventHandler } from './__test__';

const e = fakeEnterEvent();

describe('isArrowRightEventHandler()', () => {
	it('should return true given a valid ArrowRightEventHandler', () => {
		expect(isArrowRightEventHandler(mockArrowRightEventHandler(), e)).toBe(true);
	});

	it('should return false given an invalid ArrowRightEventHandler', () => {
		expect(isArrowRightEventHandler((() => null)(), e)).toBe(false);
	});
});
