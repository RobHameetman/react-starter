import { isSortType } from '../../../../../../modules';

describe('isSortType', (): void => {
	describe("given the string value 'DATE'", (): void => {
		let value: unknown = null;

		beforeEach((): void => {
			value = 'DATE';
		});

		afterEach((): void => {
			value = null;
		});

		it('should return true', (): void => {
			expect(isSortType(value)).toBe(true);
		});
	});

	describe("given the string value 'QUANTITY'", (): void => {
		let value: unknown = null;

		beforeEach((): void => {
			value = 'QUANTITY';
		});

		afterEach((): void => {
			value = null;
		});

		it('should return true', (): void => {
			expect(isSortType(value)).toBe(true);
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

		it('should return true', (): void => {
			expect(isSortType(value)).toBe(true);
		});
	});
});
