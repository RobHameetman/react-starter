import { applyMaxRows } from './applyMaxRows';

describe('applyMaxRows()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = applyMaxRows('', 0);
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
