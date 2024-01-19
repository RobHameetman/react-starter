import { cssClasses } from './cssClasses';

describe('cssClasses()', () => {
	it('should return a string of class names given an object with boolean values', () => {
		expect(cssClasses({ red: true, green: true, blue: false })).toBe(
			'red green',
		);
	});

	it('should return an empty string given an empty array', () => {
		expect(cssClasses([])).toBe('');
	});

	it('should return an empty string given an empty object', () => {
		expect(cssClasses({})).toBe('');
	});
});
