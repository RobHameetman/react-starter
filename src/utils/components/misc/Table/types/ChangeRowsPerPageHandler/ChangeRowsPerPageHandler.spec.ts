import { isChangeRowsPerPageHandler } from './ChangeRowsPerPageHandler';

describe('isChangeRowsPerPageHandler()', () => {
	it('should return true given a valid ChangeRowsPerPageHandler', () => {
		expect(isChangeRowsPerPageHandler(() => {})).toBe(true);
	});

	it('should return false given an invalid ChangeRowsPerPageHandler', () => {
		expect(isChangeRowsPerPageHandler(() => 10)).toBe(false);
	});
});
