import { updateSearchInput } from './updateSearchInput';

describe('updateSearchInput()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = updateSearchInput();
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
