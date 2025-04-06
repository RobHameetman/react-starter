import { isClipboardEventType } from './CssGlobalValue';

describe('isClipboardEventType()', () => {
	it('should return true given the string value "inherit"', () => {
		expect(isClipboardEventType('inherit')).toBe(true);
	});

	it('should return true given the string value "initial"', () => {
		expect(isClipboardEventType('initial')).toBe(true);
	});

	it('should return true given the string value "revert"', () => {
		expect(isClipboardEventType('revert')).toBe(true);
	});

	it('should return true given the string value "revert-layer"', () => {
		expect(isClipboardEventType('revert-layer')).toBe(true);
	});

	it('should return true given the string value "unset"', () => {
		expect(isClipboardEventType('unset')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isClipboardEventType('')).toBe(false);
	});
});
