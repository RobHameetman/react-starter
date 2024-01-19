import { isSearchAgainstFn } from '../../../../../../modules';

describe('isSearchAgainstFn', (): void => {
	describe('given a valid SearchAgainstFn', (): void => {
		let value: unknown;

		beforeEach((): void => {
			value = () => '';
		});

		it('should return true', (): void => {
			expect(isSearchAgainstFn(value)).toBe(true);
		});
	});

	describe('given an invalid SearchAgainstFn', (): void => {
		let value: unknown;

		beforeEach((): void => {
			value = () => null;
		});

		it('should return false', (): void => {
			expect(isSearchAgainstFn(value)).toBe(false);
		});
	});
});
