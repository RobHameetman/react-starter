import { isFormModes } from './FormModes';

describe('isFormModes()', () => {
	it('should return true given the string value "Read"', () => {
		expect(isFormModes('Read')).toBe(true);
	});

	it('should return true given the string value "Write"', () => {
		expect(isFormModes('Write')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isFormModes('')).toBe(false);
	});
});
