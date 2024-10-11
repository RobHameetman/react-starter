import { fakeEnterEvent } from '@/utils/types/events/EnterEvent/__test__';
import { isArrowUpEventHandler } from './ArrowUpEventHandler';
import { mockArrowUpEventHandler } from './__test__';

const e = fakeEnterEvent();

describe('isArrowUpEventHandler()', () => {
	it('should return true given a valid ArrowUpEventHandler', () => {
		expect(isArrowUpEventHandler(mockArrowUpEventHandler(), e)).toBe(true);
	});

	it('should return false given an invalid ArrowUpEventHandler', () => {
		expect(isArrowUpEventHandler((() => null)(), e)).toBe(false);
	});
});
