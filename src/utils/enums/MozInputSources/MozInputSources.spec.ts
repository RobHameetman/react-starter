import { MozInputSources, isMozInputSource } from './MozInputSources';

describe('isMozInputSource()', () => {
	it('should return true given the string value `MOZ_SOURCE_UNKNOWN`', () => {
		expect(isMozInputSource(MozInputSources.MOZ_SOURCE_UNKNOWN)).toBe(true);
	});

	it('should return true given the string value `MOZ_SOURCE_MOUSE`', () => {
		expect(isMozInputSource(MozInputSources.MOZ_SOURCE_MOUSE)).toBe(true);
	});

	it('should return true given the string value `MOZ_SOURCE_PEN`', () => {
		expect(isMozInputSource(MozInputSources.MOZ_SOURCE_PEN)).toBe(true);
	});

	it('should return true given the string value `MOZ_SOURCE_ERASER`', () => {
		expect(isMozInputSource(MozInputSources.MOZ_SOURCE_ERASER)).toBe(true);
	});

	it('should return true given the string value `MOZ_SOURCE_CURSOR`', () => {
		expect(isMozInputSource(MozInputSources.MOZ_SOURCE_CURSOR)).toBe(true);
	});

	it('should return true given the string value `MOZ_SOURCE_TOUCH`', () => {
		expect(isMozInputSource(MozInputSources.MOZ_SOURCE_TOUCH)).toBe(true);
	});

	it('should return true given the string value `MOZ_SOURCE_KEYBOARD`', () => {
		expect(isMozInputSource(MozInputSources.MOZ_SOURCE_KEYBOARD)).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isMozInputSource('')).toBe(false);
	});

	it('should return false given a negative number', () => {
		expect(isMozInputSource(-1)).toBe(false);
	});

	it('should return false given a number greater than 6', () => {
		expect(isMozInputSource(7)).toBe(false);
	});
});
