import { setColumns } from './setColumns';

describe('setColumns()', (): void => {
	let result: unknown = null;

	beforeEach((): void => {
		result = setColumns(0);
	});

	afterEach((): void => {
		result = null;
	});

	it.skip('should return the expected output', (): void => {
		expect(result).not.toBeNull();
	});
});
