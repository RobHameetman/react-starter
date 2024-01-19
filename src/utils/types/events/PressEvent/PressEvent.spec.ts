import { isPressEvent } from './PressEvent';
import { fakePressEvent } from './__test__';

describe('isPressEvent()', () => {
	it('should return true given a valid PressEvent', () => {
		expect(isPressEvent(fakePressEvent())).toBe(true);
	});

	it('should be valid when PointerEvents are not supported', () => {
		expect(isPressEvent(fakePressEvent({ pointerEventSupport: false }))).toBe(
			true,
		);
	});

	it('should return false given an invalid PressEvent', () => {
		expect(isPressEvent(null)).toBe(false);
	});
});
