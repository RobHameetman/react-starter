import { isFunc } from './Func';

describe('isFunc()', () => {
	it('should return true given a function', () => {
		expect(isFunc(() => {})).toBe(true);
	});

	it('should return false given null', () => {
		expect(isFunc(null)).toBe(false);
	});
});
