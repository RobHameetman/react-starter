import { changeSortOrder } from './changeSortOrder';

describe('changeSortOrder()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = changeSortOrder();
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
