import { resetSearchInput } from './resetSearchInput';

describe('resetSearchInput()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = resetSearchInput();
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
