import { fakeTabEvent } from '@app/utils/types/events/TabEvent/__test__';
import { isTabEventHandler } from './TabEventHandler';
import { mockTabEventHandler } from './__test__';

const e = fakeTabEvent();

describe('isTabEventHandler()', () => {
	it('should return true given a valid TabEventHandler', () => {
		expect(isTabEventHandler(mockTabEventHandler(), e)).toBe(true);
	});

	it('should return false given an invalid TabEventHandler', () => {
		expect(isTabEventHandler((() => null)(), e)).toBe(false);
	});
});
