import { isTheme } from './Theme';
import { fakeTheme } from './__test__';

describe('isTheme()', () => {
	it('should return true given a valid Theme', () => {
		expect(isTheme(fakeTheme())).toBe(true);
	});

	it('should return false given an invalid Theme', () => {
		expect(isTheme(fakeTheme({ required: null }))).toBe(false);
	});
});
