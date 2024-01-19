import { isInteractionModality } from './InteractionModalities';

describe('isInteractionModality()', () => {
	it('should return true given the string value "keyboard"', () => {
		expect(isInteractionModality('keyboard')).toBe(true);
	});

	it('should return true given the string value "pointer"', () => {
		expect(isInteractionModality('pointer')).toBe(true);
	});

	it('should return true given the string value "virtual"', () => {
		expect(isInteractionModality('virtual')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isInteractionModality('')).toBe(false);
	});
});
