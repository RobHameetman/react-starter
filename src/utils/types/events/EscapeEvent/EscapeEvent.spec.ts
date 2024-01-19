import { isEscapeEvent } from './EscapeEvent';
import { fakeEscapeEvent } from './__test__';

describe('isEscapeEvent()', () => {
	it('should return true given a valid EscapeEvent', () => {
		expect(isEscapeEvent(fakeEscapeEvent())).toBe(true);
	});

	it('should return false given an invalid EscapeEvent', () => {
		expect(isEscapeEvent(fakeEscapeEvent({ code: 'Enter' }))).toBe(false);
	});
});
