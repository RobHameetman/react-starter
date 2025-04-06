import { fakeEscapeEvent } from '@/utils/types/events/EscapeEvent/__test__';
import { isEscapeEventHandler } from './EscapeEventHandler';
import { mockEscapeEventHandler } from './__test__';

const e = fakeEscapeEvent();

describe('isEscapeEventHandler()', () => {
	it('should return true given a valid EscapeEventHandler', () => {
		expect(isEscapeEventHandler(mockEscapeEventHandler(), e)).toBe(true);
	});

	it('should return false given an invalid EscapeEventHandler', () => {
		expect(isEscapeEventHandler((() => null)(), e)).toBe(false);
	});
});
