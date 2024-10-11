import { fakeEnterEvent } from '@/utils/types/events/EnterEvent/__test__';
import { isArrowDownEventHandler } from './ArrowDownEventHandler';
import { mockArrowDownEventHandler } from './__test__';

const e = fakeEnterEvent();

describe('isArrowDownEventHandler()', () => {
	it('should return true given a valid ArrowDownEventHandler', () => {
		expect(isArrowDownEventHandler(mockArrowDownEventHandler(), e)).toBe(true);
	});

	it('should return false given an invalid ArrowDownEventHandler', () => {
		expect(isArrowDownEventHandler((() => null)(), e)).toBe(false);
	});
});
