import { isDraggable } from './Draggable';
import { fakeDraggable } from './__test__';

describe('isDraggable()', () => {
	it('should return true for a valid set of Draggable props', () => {
		expect(isDraggable(fakeDraggable())).toBe(true);
	});

	it('should return false for an invalid set of Draggable props', () => {
		expect(isDraggable(fakeDraggable({ onDrag: null }))).toBe(false);
	});
});
