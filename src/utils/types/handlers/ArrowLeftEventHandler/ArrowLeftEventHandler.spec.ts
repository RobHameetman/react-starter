import { fakeEnterEvent } from '@/utils/types/events/EnterEvent/__test__';
import { isArrowLeftEventHandler } from './ArrowLeftEventHandler';
import { mockArrowLeftEventHandler } from './__test__';

const e = fakeEnterEvent();

describe('isArrowLeftEventHandler()', () => {
	it('should return true given a valid ArrowLeftEventHandler', () => {
		expect(isArrowLeftEventHandler(mockArrowLeftEventHandler(), e)).toBe(true);
	});

	it('should return false given an invalid ArrowLeftEventHandler', () => {
		expect(isArrowLeftEventHandler((() => null)(), e)).toBe(false);
	});
});
