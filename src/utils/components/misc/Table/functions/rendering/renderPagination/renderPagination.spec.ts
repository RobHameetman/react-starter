import { renderPagination } from './renderPagination';

describe('renderPagination()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = renderPagination();
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
