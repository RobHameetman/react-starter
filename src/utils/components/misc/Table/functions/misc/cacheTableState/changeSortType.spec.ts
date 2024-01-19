import { cacheTableState } from './cacheTableState';

describe('cacheTableState()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = cacheTableState('', 0);
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
