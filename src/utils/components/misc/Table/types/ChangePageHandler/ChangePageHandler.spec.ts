import { isChangePageHandler } from './ChangePageHandler';

describe('isChangePageHandler()', () => {
	it('should return true given a valid ChangePageHandler', () => {
		expect(isChangePageHandler(() => {})).toBe(true);
	});

	it('should return false given an invalid ChangePageHandler', () => {
		expect(isChangePageHandler(() => true)).toBe(false);
	});
});
