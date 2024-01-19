import { isChangeTabHandler } from './ChangeTabHandler';

describe('isChangeTabHandler()', () => {
	it('should return true given a valid ChangeTabHandler', () => {
		expect(isChangeTabHandler(() => {})).toBe(true);
	});

	it('should return false given a valid ChangeTabHandler', () => {
		expect(isChangeTabHandler(() => null)).toBe(false);
	});
});
