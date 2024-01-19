import { renderSort } from './renderSort';

describe('renderSort()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = renderSort();
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
