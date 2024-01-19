import { isClipboardEventType } from './ClipboardEventTypes';

describe('isClipboardEventType()', () => {
	it('should return true given the string value "copy"', () => {
		expect(isClipboardEventType('copy')).toBe(true);
	});

	it('should return true given the string value "cut"', () => {
		expect(isClipboardEventType('cut')).toBe(true);
	});

	it('should return true given the string value "pase"', () => {
		expect(isClipboardEventType('pase')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isClipboardEventType('')).toBe(false);
	});
});
