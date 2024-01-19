import { capitalize } from './capitalize';

describe('capitalize()', () => {
	it('should return empty string given an empty string value', () => {
		expect(capitalize('')).toBe('');
	});

	it('should capitalize ASCII strings correctly', () => {
		expect(capitalize('hello')).toBe('Hello');
	});

	it('should keep the capital letter in ASCII strings if it is already capitalized', () => {
		expect(capitalize('Hello')).toBe('Hello');
	});

	it('should handle unicode strings correctly', () => {
		expect(capitalize('\ud83d\ude0a smiley')).toBe('\ud83d\ude0a smiley');
	});
});
