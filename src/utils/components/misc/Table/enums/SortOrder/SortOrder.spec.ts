import { isSortOrder } from '../../../../../../modules';

describe('isSortOrder', (): void => {
	describe("given the string value 'asc'", (): void => {
		let value: unknown = null;

		beforeEach((): void => {
			value = 'asc';
		});

		afterEach((): void => {
			value = null;
		});

		it('should return true', (): void => {
			expect(isSortOrder(value)).toBe(true);
		});
	});

	describe("given the string value 'desc'", (): void => {
		let value: unknown = null;

		beforeEach((): void => {
			value = 'desc';
		});

		afterEach((): void => {
			value = null;
		});

		it('should return true', (): void => {
			expect(isSortOrder(value)).toBe(true);
		});
	});

	describe('given an empty string', (): void => {
		let value: unknown = null;

		beforeEach((): void => {
			value = '';
		});

		afterEach((): void => {
			value = null;
		});

		it('should return false', (): void => {
			expect(isSortOrder(value)).toBe(false);
		});
	});
});
