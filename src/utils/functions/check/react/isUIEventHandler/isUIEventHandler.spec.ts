import { fakeUIEvent } from '@/utils/functions/check/react/isUIEvent/__test__';
import { isUIEventHandler } from './isUIEventHandler';
import { mockUIEventHandler } from './__test__';

const e = fakeUIEvent();

describe('isUIEventHandler()', () => {
	it('should return true given a valid UIEventHandler', () => {
		expect(isUIEventHandler(mockUIEventHandler(), e)).toBe(true);
	});

	it('should return false given an invalid UIEventHandler', () => {
		expect(isUIEventHandler((() => null)(), e)).toBe(false);
	});
});
