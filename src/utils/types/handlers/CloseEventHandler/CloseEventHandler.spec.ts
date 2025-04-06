import { fakeCloseEvent } from '@/utils/types/events/CloseEvent/__test__';
import { isCloseEventHandler } from './CloseEventHandler';
import { mockCloseEventHandler } from './__test__';

const e = fakeCloseEvent();

describe('isCloseEventHandler()', () => {
	it('should return true given a valid CloseEventHandler', () => {
		expect(isCloseEventHandler(mockCloseEventHandler(), e)).toBe(true);
	});

	it('should return false given an invalid CloseEventHandler', () => {
		expect(isCloseEventHandler((() => null)(), e)).toBe(false);
	});
});
