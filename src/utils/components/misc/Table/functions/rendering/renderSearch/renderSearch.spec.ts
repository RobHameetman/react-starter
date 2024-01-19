import { renderSearch } from './renderSearch';

describe('renderSearch()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = renderSearch();
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
