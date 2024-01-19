import { isAlignment } from './Alignments';

describe('isAlignment()', () => {
	it('should return true given the string value "left"', () => {
		expect(isAlignment('left')).toBe(true);
	});

	it('should return true given the string value "center"', () => {
		expect(isAlignment('center')).toBe(true);
	});

	it('should return true given the string value "right"', () => {
		expect(isAlignment('right')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isAlignment('')).toBe(false);
	});
});
