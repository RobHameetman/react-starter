import { changeSortType } from './changeSortType';

describe('changeSortType()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = changeSortType();
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
