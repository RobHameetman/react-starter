import { fakePressEvent } from '@/utils/types/events/PressEvent/__test__';
import { isPressEventHandler } from './PressEventHandler';
import { mockPressEventHandler } from './__test__';

const e = fakePressEvent();

describe('isPressEventHandler()', () => {
	it('should return true given a valid PressEventHandler', () => {
		expect(isPressEventHandler(mockPressEventHandler(), e)).toBe(true);
	});

	it('should return false given an invalid PressEventHandler', () => {
		expect(isPressEventHandler((() => null)(), e)).toBe(false);
	});
});
