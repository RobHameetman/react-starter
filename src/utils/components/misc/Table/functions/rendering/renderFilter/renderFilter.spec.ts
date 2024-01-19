import { renderFilter } from './renderFilter';

describe('renderFilter()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = renderFilter();
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
