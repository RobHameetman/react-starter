import { setPageSize } from './setPageSize';

describe('setPageSize()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = setPageSize();
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
