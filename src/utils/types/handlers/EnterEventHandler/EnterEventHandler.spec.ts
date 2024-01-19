import { fakeEnterEvent } from '@app/utils/types/events/EnterEvent/__test__';
import { isEnterEventHandler } from './EnterEventHandler';
import { mockEnterEventHandler } from './__test__';

const e = fakeEnterEvent();

describe('isEnterEventHandler()', () => {
	it('should return true given a valid EnterEventHandler', () => {
		expect(isEnterEventHandler(mockEnterEventHandler(), e)).toBe(true);
	});

	it('should return false given an invalid EnterEventHandler', () => {
		expect(isEnterEventHandler((() => null)(), e)).toBe(false);
	});
});
