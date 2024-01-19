import { isDragEventType } from './DragEventTypes';

describe('isDragEventType()', () => {
	it('should return true given the string value "drag"', () => {
		expect(isDragEventType('drag')).toBe(true);
	});

	it('should return true given the string value "dragend"', () => {
		expect(isDragEventType('dragend')).toBe(true);
	});

	it('should return true given the string value "dragenter"', () => {
		expect(isDragEventType('dragenter')).toBe(true);
	});

	it('should return true given the string value "dragleave"', () => {
		expect(isDragEventType('dragleave')).toBe(true);
	});

	it('should return true given the string value "dragover"', () => {
		expect(isDragEventType('dragover')).toBe(true);
	});

	it('should return true given the string value "dragstart"', () => {
		expect(isDragEventType('dragstart')).toBe(true);
	});

	it('should return true given the string value "drop"', () => {
		expect(isDragEventType('drop')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isDragEventType('')).toBe(false);
	});
});
