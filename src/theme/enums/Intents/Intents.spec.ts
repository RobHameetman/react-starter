import { isIntent } from './Intents';

describe('isIntent()', () => {
	it('should return true given the string value "error"', () => {
		expect(isIntent('error')).toBe(true);
	});

	it('should return true given the string value "info"', () => {
		expect(isIntent('info')).toBe(true);
	});

	it('should return true given the string value "standard"', () => {
		expect(isIntent('standard')).toBe(true);
	});

	it('should return true given the string value "success"', () => {
		expect(isIntent('success')).toBe(true);
	});

	it('should return true given the string value "warning"', () => {
		expect(isIntent('warning')).toBe(true);
	});

	it('should return false given the string value "disabled"', () => {
		expect(isIntent('disabled')).toBe(false);
	});

	it('should return false given an empty string', () => {
		expect(isIntent('')).toBe(false);
	});
});
