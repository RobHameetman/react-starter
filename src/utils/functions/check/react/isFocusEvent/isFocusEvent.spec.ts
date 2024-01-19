import { isFocusEvent } from './isFocusEvent';
import { fakeFocusEvent } from './__test__';

describe('isFocusEvent()', () => {
	it('should return true given a valid FocusEvent', () => {
		expect(isFocusEvent(fakeFocusEvent())).toBe(true);
	});

	it('should return false given an invalid FocusEvent', () => {
		expect(isFocusEvent(fakeFocusEvent({ type: 'pointerup' }))).toBe(false);
	});
});
