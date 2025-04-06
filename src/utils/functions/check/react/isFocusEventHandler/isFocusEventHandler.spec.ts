import { fakeFocusEvent } from '@/utils/functions/check/react/isFocusEvent/__test__';
import { isFocusEventHandler } from './isFocusEventHandler';
import { mockFocusEventHandler } from './__test__';

const e = fakeFocusEvent();

describe('isFocusEventHandler()', () => {
	it('should return true given a valid FocusEventHandler', () => {
		expect(isFocusEventHandler(mockFocusEventHandler(), e)).toBe(true);
	});

	it('should return false given an invalid FocusEventHandler', () => {
		expect(isFocusEventHandler((() => null)(), e)).toBe(false);
	});
});
