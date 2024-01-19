import { snakeCase } from './snakeCase';

describe('snakeCase()', () => {
	it('should convert string to snake case correctly', () => {
		expect(snakeCase('HelloWorld')).toBe('hello_world');
	});

	it('should handle string with spaces correctly', () => {
		expect(snakeCase('Hello World')).toBe('hello_world');
	});

	it('should handle string with special characters correctly', () => {
		expect(snakeCase('Hello$World!')).toBe('hello_world');
		expect(snakeCase('--HELLO-WORLD--')).toBe('hello_world');
	});

	it('should return an empty string given an empty string', () => {
		expect(snakeCase('')).toBe('');
	});
});
