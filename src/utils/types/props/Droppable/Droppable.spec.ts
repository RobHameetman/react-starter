import { isDroppable } from './Droppable';
import { fakeDroppable } from './__test__';

describe('isDroppable()', () => {
	it('should return true for a valid set of Droppable props', () => {
		expect(isDroppable(fakeDroppable())).toBe(true);
	});

	it('should return false for an invalid set of Droppable props', () => {
		expect(isDroppable(fakeDroppable({ onDrop: null }))).toBe(false);
	});
});
