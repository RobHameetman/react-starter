import { isDragEvent } from './isDragEvent';
import { fakeDragEvent } from './__test__';

describe('isDragEvent()', () => {
	it('should return true given a valid DragEvent', () => {
		expect(isDragEvent(fakeDragEvent())).toBe(true);
	});

	it('should return false given an invalid DragEvent', () => {
		expect(isDragEvent(fakeDragEvent({ type: 'mouseout' }))).toBe(false);
	});
});
