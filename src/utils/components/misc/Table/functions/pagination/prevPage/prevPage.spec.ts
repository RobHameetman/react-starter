import { prevPage } from './prevPage';

describe('prevPage()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = prevPage();
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
