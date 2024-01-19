import { camelCase } from './camelCase';

describe('camelCase()', () => {
	it('should convert string values to camel-case correctly', () => {
		expect(camelCase('hello_world')).toBe('helloWorld');
	});

	it('should handle strings with spaces correctly', () => {
		expect(camelCase('hello world')).toBe('helloWorld');
	});

	it('should handle string with special characters correctly', () => {
		expect(camelCase('hello$world!')).toBe('helloWorld');
		expect(camelCase('--hello-world--')).toBe('helloWorld');
		expect(camelCase('__HELLO_WORLD__')).toBe('helloWorld');
	});

	it('should return an empty string given an empty string value', () => {
		expect(camelCase('')).toBe('');
	});
});
