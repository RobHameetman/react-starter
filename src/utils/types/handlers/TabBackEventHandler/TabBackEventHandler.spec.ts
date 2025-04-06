import { fakeTabBackEvent } from '@/utils/types/events/TabBackEvent/__test__';
import { isTabBackEventHandler } from './TabBackEventHandler';
import { mockTabBackEventHandler } from './__test__';

const e = fakeTabBackEvent();

describe('isTabBackEventHandler()', () => {
	it('should return true given a valid TabBackEventHandler', () => {
		expect(isTabBackEventHandler(mockTabBackEventHandler(), e)).toBe(true);
	});

	it('should return false given an invalid TabBackEventHandler', () => {
		expect(isTabBackEventHandler((() => null)(), e)).toBe(false);
	});
});
