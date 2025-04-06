import { fakeSyntheticEvent } from '@/utils/functions/check/react/isSyntheticEvent/__test__';
import { isEventHandler } from './isEventHandler';
import { mockEventHandler } from './__test__';

const e = fakeSyntheticEvent();

describe('isEventHandler()', () => {
	it('should return true given a valid EventHandler with a valid SyntheticEvent', () => {
		expect(isEventHandler(mockEventHandler(), e)).toBe(true);
	});

	it('should return true given a valid EventHandler without a valid SyntheticEvent', () => {
		expect(isEventHandler(mockEventHandler())).toBe(true);
	});

	it('should return false given an invalid EventHandler', () => {
		expect(isEventHandler((() => null)(), e)).toBe(false);
	});
});
